import express from "express";
import * as adminController from "../controllers/adminController"; 

const router = express.Router();

router.patch("/set-admin", adminController.setAdminRole); 
router.get("/users", adminController.getAllUsers);
router.get("/orders", adminController.getAllOrders);
router.post("/products", adminController.addProduct); 

export default router;
