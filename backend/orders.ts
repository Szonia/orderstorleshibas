import express from "express";
import { getAllOrders, updateOrderStatus, createOrder, getUserOrders } from "./controllers/orderController"; // Importáljuk a getUserOrders függvényt

const router = express.Router();

router.get("/", getAllOrders); // 🔹 Összes rendelés lekérése
router.patch("/:id", updateOrderStatus); // 🔹 Rendelés státusz módosítása
router.post("/:userId", createOrder); // 🔹 Új rendelés létrehozása
router.get("/user/:userId", getUserOrders); // 🔹 Felhasználó saját rendeléseinek lekérése (új végpont)

export default router;
