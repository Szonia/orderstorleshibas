import { v4 as uuidv4 } from "uuid";  // UUID generálás importálása
import { Request, Response } from "express";
import { db } from "../firebase"; // Az adatbázis kapcsolat, ami a Firebase Realtime Database-t használja
import { ref, get, set } from "firebase/database"; // Hozzáadva a 'set' importálása
//import nodemailer from "nodemailer"; // Email küldéshez szükséges

const ORDERS_COLLECTION = "orders";
const PRODUCTS_REF = "products"; // A termékek gyűjtemény neve a Realtime Database-ben
const USERS_COLLECTION = "users"; // A felhasználók gyűjteménye

/**
 * 🔹 Összes rendelés lekérése
 */
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const ordersRef = db.ref(ORDERS_COLLECTION);
    const snapshot = await ordersRef.get();
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Nincs rendelés." });
    }
    return res.json(snapshot.val());
  } catch (error) {
    console.error("❌ Hiba történt a rendelések lekérésekor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelések lekérésekor." });
  }
};

/**
 * 🔹 Rendelés státuszának módosítása (admin)
 */
export const updateOrderStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ["pending", "shipped", "delivered"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: "Érvénytelen státusz." });
  }

  try {
    const orderRef = db.ref(`${ORDERS_COLLECTION}/${id}`);
    const orderSnapshot = await orderRef.get();
    const order = orderSnapshot.val();

    // Ellenőrizzük, hogy a rendelés létezik
    if (!order) {
      return res.status(404).json({ error: "Rendelés nem található." });
    }

    // Frissítjük a rendelés státuszát
    await orderRef.set({ ...order, status });

    // Értesítés küldése a felhasználónak (ha szükséges)
    if (status === "shipped" || status === "delivered") {
      const userRef = db.ref(`users/${order.userId}`);
      const userSnapshot = await userRef.get();
      const user = userSnapshot.val();

/*       if (user && user.email) {
        // Küldjünk email értesítést
        const transporter = nodemailer.createTransport({
          service: "gmail", // Használhatod a kívánt email szolgáltatót
          auth: {
            user: process.env.EMAIL_USER,  // Az email címed
            pass: process.env.EMAIL_PASS,  // Az email jelszavad
          },
        });
 */
/*         const mailOptions = {
          from: process.env.EMAIL_USER,  // Az email címed
          to: user.email,  // A felhasználó email címe
          subject: "Rendelés státusz frissítése",
          text: `A rendelésed státusza: ${status}. Kérjük, kövesd nyomon a rendelésedet a webáruházban.`,
        };
 */
/*         transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("❌ Hiba az email küldésekor:", error);
          } else {
            console.log("✅ Email sikeresen elküldve:", info.response);
          }
        });
 */      }
    /*}*/

    return res.json({ message: "Rendelés státusza frissítve.", status });
  } catch (error) {
    console.error("❌ Hiba a rendelés frissítésekor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelés frissítésekor." });
  }
};

/**
 * 🔹 Rendelés leadása (kosárból rendelés Realtime Database-ba) – kiegészítve a cím adatokkal
 */
export const createOrder = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { items, totalPrice, shippingAddress } = req.body;  // Hozzáadva shippingAddress

  if (!items || items.length === 0) {
    return res.status(400).json({ error: "A rendeléshez legalább egy termék szükséges." });
  }

  if (!shippingAddress || !shippingAddress.street || !shippingAddress.city || !shippingAddress.zipCode) {
    return res.status(400).json({ error: "Hiányzó címadatok!" });
  }

  try {
    // Ellenőrzés, hogy minden termék létezik a Realtime Database-ben
    const productRefs = items.map((item: { productId: string, productName: string}) =>
      db.ref(`${PRODUCTS_REF}/${item.productId}`).get()
    );
    const productSnapshots = await Promise.all(productRefs);

    // Ellenőrzés, hogy a termékek léteznek
    const invalidProducts = productSnapshots.filter(snapshot => !snapshot.exists());
    if (invalidProducts.length > 0) {
      return res.status(404).json({ error: `Néhány termék nem található: ${invalidProducts.map(p => p.key).join(', ')}` });
    }

    // Termékek ellenőrzése és frissítése a rendeléshez
    const updatedItems = items.map((item: { productId: string, productName: string}) => {
      const productSnapshot = productSnapshots.find(snapshot => snapshot.key === item.productId);
      const product = productSnapshot?.val();
      return { ...item, productName: product?.name, price: product?.price };
    });

    const newOrder = {
      userId,
      items: updatedItems,
      totalPrice,
      shippingAddress,  // Hozzáadva a rendeléshez a cím
      status: "pending",
      createdAt: new Date(),
    };

    // Új rendelés hozzáadása a Realtime Database-be egy UUID-val az ID helyett
    const orderId = uuidv4();  // UUID generálás
    const orderRef = db.ref(`${ORDERS_COLLECTION}/${orderId}`);
    await orderRef.set(newOrder);

    return res.status(201).json({
      message: "Rendelés sikeresen leadva.",
      orderId,
      orderDetails: newOrder, // Visszaküldjük a rendelés részleteit
    });
  } catch (error) {
    console.error("❌ Hiba a rendelés leadásakor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelés leadásakor." });
  }
};

/**
 * 🔹 Felhasználó saját rendeléseinek lekérése
 */
export const getUserOrders = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const ordersRef = db.ref(`${ORDERS_COLLECTION}`);
    const snapshot = await ordersRef.get();
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Nincs rendelés." });
    }

    const orders = snapshot.val();
    const userOrders = Object.keys(orders)
      .filter(orderId => orders[orderId].userId === userId)
      .map(orderId => ({ id: orderId, ...orders[orderId] }));

    if (userOrders.length === 0) {
      return res.status(404).json({ error: "Nincsenek rendelései." });
    }

    return res.status(200).json(userOrders);
  } catch (error) {
    console.error("❌ Hiba a rendelés lekérésekor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelés lekérésekor." });
  }
};
