import { Request, Response } from "express";
import { db } from "../firebase";
import { ref, get, set, remove } from "firebase/database";

const CARTS_REF = "carts";

export const getCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const snapshot = await db.ref(`${CARTS_REF}/${userId}`).get();  
    if (!snapshot.exists()) {
      return res.json({ items: [] }); 
    }
    return res.json(snapshot.val()); 
  } catch (error) {
    console.error(" Error occurred while getting cart:", error);
    return res.status(500).json({ error: "Hiba történt a kosár lekérésekor." }); 
  }
};

export const addToCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cartRef = db.ref(`${CARTS_REF}/${userId}`);
    const snapshot = await cartRef.get();
    let cart: { items: { productId: string; quantity: number }[] } = { items: [] };

    if (snapshot.exists()) {
      cart = snapshot.val();
    }

    const existingItem = cart.items.find((item) => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;  
    } else {
      cart.items.push({ productId, quantity });  
    }

    
    await cartRef.set(cart);

    return res.json(cart); 
  } catch (error) {
    console.error(" Hiba történt a kosár frissítésekor:", error);
    return res.status(500).json({ error: "Hiba történt a kosár frissítésekor." });
  }
};

export const updateCart = async (req: Request, res: Response)=> {
  const { userId } = req.params;
  const { items } = req.body;  

  try {
    const cartRef = db.ref(`${CARTS_REF}/${userId}`);
    await cartRef.set({ items });  
    res.json({ message: "Kosár frissítve." });
  } catch (error) {
    console.error(" Hiba történt a kosár frissítésekor:", error);
    res.status(500).json({ error: "Hiba történt a kosár frissítésekor." });
  }
};

export const deleteCart = async (req: Request, res: Response): Promise<Response> => {
  const { userId, productId } = req.params;

  try {
    const cartRef = db.ref(`${CARTS_REF}/${userId}`);
    const snapshot = await cartRef.get();

    if (!snapshot.exists()) {
       return res.status(404).json({ error: "Kosár nem található." });
    }

    const cart = snapshot.val();

    if (productId) {
      const productIndex = cart.items.findIndex((item: any) => item.productId === productId);
      if (productIndex === -1) {
        return res.status(404).json({ error: "A termék nem található a kosárban." });
      }

      cart.items.splice(productIndex, 1);

      if (cart.items.length === 0) {
        await cartRef.remove();
        return res.status(200).json({ message: "Kosár törölve." });
      }

      await cartRef.set(cart);
      res.status(200).json({ message: "Termék törölve a kosárból.", cart });
    }

    await cartRef.remove();
    return res.status(200).json({ message: "Kosár törölve." });

  } catch (error) {
    console.error(" Hiba történt a kosár törlésénél:", error);
     return res.status(500).json({ error: "Hiba történt a kosár törlésénél." });
  }
};
