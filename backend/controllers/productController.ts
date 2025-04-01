import { Request, Response } from "express";
import { db } from "../firebase";
import { ref, get, set, update, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const PRODUCTS_REF = "products";

/**
 * 🔹 Összes termék lekérése
 */
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const snapshot = await get(ref(db, PRODUCTS_REF));
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Nem található termék." });
    }
    return res.json(snapshot.val());
  } catch (error) {
    console.error("❌ Hiba történt a termékek lekérdezésekor:", error);
    return res.status(500).json({ error: "Hiba történt a termékek lekérdezésekor." });
  }
};

/**
 * 🔹 Egy termék lekérése ID alapján
 */
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const snapshot = await get(ref(db, `${PRODUCTS_REF}/${id}`));
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "A termék nem található." });
    }
    return res.json(snapshot.val());
  } catch (error) {
    console.error(`❌ Hiba történt a termék (${id}) lekérdezésekor:`, error);
    return res.status(500).json({ error: "Hiba történt a termék lekérdezésekor." });
  }
};

/**
 * 🔹 Új termék létrehozása
 */
export const createProduct = async (req: Request, res: Response) => {
  try {
    const id = uuidv4();
    const { name, price, description, stock } = req.body;

    // Ha nem adtak meg stock-ot, alapértelmezetten 0
    const newProduct = { id, name, price, description, stock: stock || 0 };

    await set(ref(db, `${PRODUCTS_REF}/${id}`), newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("❌ Hiba történt a termék létrehozásakor:", error);
    return res.status(500).json({ error: "Hiba történt a termék létrehozásakor." });
  }
};

/**
 * 🔹 Termék módosítása ID alapján
 */
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, description, stock } = req.body;
  try {
    const productRef = ref(db, `${PRODUCTS_REF}/${id}`);
    const snapshot = await get(productRef);
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "A termék nem található." });
    }

    const updatedProduct = {
      name: name || snapshot.val().name,
      price: price || snapshot.val().price,
      description: description || snapshot.val().description,
      stock: stock !== undefined ? stock : snapshot.val().stock,
    };

    await update(productRef, updatedProduct);
    return res.json({ message: "Termék frissítve." });
  } catch (error) {
    console.error("❌ Hiba történt a termék frissítésekor:", error);
    return res.status(500).json({ error: "Hiba történt a termék frissítésekor." });
  }
};

/**
 * 🔹 Termék törlése ID alapján
 */
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const productRef = ref(db, `${PRODUCTS_REF}/${id}`);
    const snapshot = await get(productRef);
    if (!snapshot.exists()) {
      return res.status(404).json({ error: "A termék nem található." });
    }
    await remove(productRef);
    return res.json({ message: "Termék sikeresen törölve." });
  } catch (error) {
    console.error("❌ Hiba történt a termék törlésekor:", error);
    return res.status(500).json({ error: "Hiba történt a termék törlésekor." });
  }
};
