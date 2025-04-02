import express from "express";
import { getAllOrders, updateOrderStatus, createOrder, getUserOrders } from "./controllers/orderController"; 

const router = express.Router();

router.get("/", getAllOrders); 
router.patch("/:id", updateOrderStatus);
router.post("/:userId", createOrder);
router.get("/user/:userId", getUserOrders);

export default router;
