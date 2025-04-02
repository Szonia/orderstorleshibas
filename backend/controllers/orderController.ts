import { v4 as uuidv4 } from "uuid"; 
import { Request, Response } from "express";
import { db } from "../firebase"; 
import { ref, get, set } from "firebase/database";

const ORDERS_COLLECTION = "orders";
const PRODUCTS_REF = "products"; 
const USERS_COLLECTION = "users"; 

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const ordersRef = db.ref(ORDERS_COLLECTION);
    const snapshot = await ordersRef.get();
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Nincs rendelés." });
    }
    return res.json(snapshot.val());
  } catch (error) {
    console.error(" Hiba történt a rendelések lekérésekor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelések lekérésekor." });
  }
};

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

    if (!order) {
      return res.status(404).json({ error: "Rendelés nem található." });
    }

    await orderRef.set({ ...order, status });

    if (status === "shipped" || status === "delivered") {
      const userRef = db.ref(`users/${order.userId}`);
      const userSnapshot = await userRef.get();
      const user = userSnapshot.val();

    return res.json({ message: "Rendelés státusza frissítve.", status });
  } catch (error) {
    console.error(" Hiba a rendelés frissítésekor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelés frissítésekor." });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { items, totalPrice, shippingAddress } = req.body; 

  if (!items || items.length === 0) {
    return res.status(400).json({ error: "A rendeléshez legalább egy termék szükséges." });
  }

  if (!shippingAddress || !shippingAddress.street || !shippingAddress.city || !shippingAddress.zipCode) {
    return res.status(400).json({ error: "Hiányzó címadatok!" });
  }

  try {
    const productRefs = items.map((item: { productId: string, productName: string}) =>
      db.ref(`${PRODUCTS_REF}/${item.productId}`).get()
    );
    const productSnapshots = await Promise.all(productRefs);

    const invalidProducts = productSnapshots.filter(snapshot => !snapshot.exists());
    if (invalidProducts.length > 0) {
      return res.status(404).json({ error: `Néhány termék nem található: ${invalidProducts.map(p => p.key).join(', ')}` });
    }

    const updatedItems = items.map((item: { productId: string, productName: string}) => {
      const productSnapshot = productSnapshots.find(snapshot => snapshot.key === item.productId);
      const product = productSnapshot?.val();
      return { ...item, productName: product?.name, price: product?.price };
    });

    const newOrder = {
      userId,
      items: updatedItems,
      totalPrice,
      shippingAddress, 
      status: "pending",
      createdAt: new Date(),
    };

    const orderId = uuidv4(); 
    const orderRef = db.ref(`${ORDERS_COLLECTION}/${orderId}`);
    await orderRef.set(newOrder);

    return res.status(201).json({
      message: "Rendelés sikeresen leadva.",
      orderId,
      orderDetails: newOrder,
    });
  } catch (error) {
    console.error(" Hiba a rendelés leadásakor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelés leadásakor." });
  }
};

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
    console.error(" Hiba a rendelés lekérésekor:", error);
    return res.status(500).json({ error: "Hiba történt a rendelés lekérésekor." });
  }
};
