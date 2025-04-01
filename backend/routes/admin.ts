import express from "express";
import * as adminController from "../controllers/adminController";  // Importáljuk az adminController-t

const router = express.Router();

// Admin útvonalak, admin jogosultság ellenőrzésével
router.patch("/set-admin", adminController.setAdminRole);  // Itt biztosan importálva van a függvény
router.get("/users", adminController.getAllUsers);
router.get("/orders", adminController.getAllOrders);
router.post("/products", adminController.addProduct); // Admin jogosultság szükséges

export default router;
