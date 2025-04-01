import { Request, Response } from "express";
import { firestore, auth } from "../firebase"; // Az auth importálása a firebase.ts-ből

/**
 * 🔹 Összes felhasználó lekérése (Firestore)
 */
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Nincs hitelesítő token." });
    }

    const decodedToken = await auth.verifyIdToken(token); // Az auth változóból hívjuk a verifyIdToken-t
    const uid = decodedToken.uid;

    const userRef = firestore.collection("users").doc(uid);
    const userDoc = await userRef.get();
    const user = userDoc.data();

    // Ellenőrizzük, hogy admin-e
    if (user?.role !== "admin") {
      return res.status(403).json({ message: "Nincs elég jogosultságod az admin műveletekhez." });
    }

    // Ha admin, folytatódik a művelet
    const usersRef = firestore.collection("users");
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Hiba a felhasználók lekérésekor:", error);
    res.status(500).json({ message: "Hiba történt a felhasználók lekérésekor." });
  }
};

/**
 * 🔹 Összes rendelés lekérése (Firestore)
 */
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Nincs hitelesítő token." });
    }

    const decodedToken = await auth.verifyIdToken(token); // Az auth változóból hívjuk a verifyIdToken-t
    const uid = decodedToken.uid;

    const userRef = firestore.collection("users").doc(uid);
    const userDoc = await userRef.get();
    const user = userDoc.data();

    // Ellenőrizzük, hogy admin-e
    if (user?.role !== "admin") {
      return res.status(403).json({ message: "Nincs elég jogosultságod az admin műveletekhez." });
    }

    // Ha admin, folytatódik a művelet
    const ordersRef = firestore.collection("orders");
    const snapshot = await ordersRef.get();
    const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(orders);
  } catch (error) {
    console.error("❌ Hiba a rendelések lekérésekor:", error);
    res.status(500).json({ message: "Hiba történt a rendelések lekérésekor." });
  }
};

/**
 * 🔹 Felhasználó admin jogának beállítása
 */
export const setAdminRole = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "Felhasználó ID szükséges." });
    }

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Nincs hitelesítő token." });
    }

    const decodedToken = await auth.verifyIdToken(token); // Az auth változóból hívjuk a verifyIdToken-t
    const uid = decodedToken.uid;

    const userRef = firestore.collection("users").doc(uid);
    const userDoc = await userRef.get();
    const user = userDoc.data();

    // Ellenőrizzük, hogy admin-e
    if (user?.role !== "admin") {
      return res.status(403).json({ message: "Nincs elég jogosultságod az admin műveletekhez." });
    }

    const userRecord = await auth.getUser(userId); // Az auth-ból hívjuk a getUser-t

    if (!userRecord) {
      return res.status(404).json({ message: "A felhasználó nem található az Authentication rendszerben." });
    }

    const userRefToUpdate = firestore.collection("users").doc(userId);
    await userRefToUpdate.update({ isAdmin: true, role: "admin" });

    res.status(200).json({ message: `Felhasználó (${userRecord.email}) admin jogot kapott.` });
  } catch (error) {
    console.error("❌ Hiba az admin jog beállításakor:", error);
    res.status(500).json({ message: "Hiba történt az admin jog beállításakor." });
  }
};

/**
 * 🔹 Új termék hozzáadása
 */
export const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock } = req.body;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Nincs hitelesítő token." });
    }

    const decodedToken = await auth.verifyIdToken(token);  // Az auth változóból hívjuk a verifyIdToken-t
    const uid = decodedToken.uid;

    const userRef = firestore.collection("users").doc(uid);
    const userDoc = await userRef.get();
    const user = userDoc.data();

    if (user?.role !== "admin") {
      return res.status(403).json({ message: "Nincs elég jogosultságod az admin műveletekhez." });
    }

    const productRef = firestore.collection("products");
    const newProduct = {
      name,
      price,
      description,
      stock: stock || 0, // Ha nem adták meg a stock-ot, alapértelmezetten 0
      createdAt: new Date(),
    };

    const docRef = await productRef.add(newProduct);

    res.status(201).json({
      message: "Termék sikeresen hozzáadva.",
      product: { id: docRef.id, ...newProduct },
    });
  } catch (error) {
    console.error("❌ Hiba a termék hozzáadásakor:", error);
    res.status(500).json({ message: "Hiba történt a termék hozzáadása közben." });
  }
};
