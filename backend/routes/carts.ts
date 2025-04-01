import express from "express";
import { getCart, addToCart, updateCart, deleteCart } from "../controllers/cartController";

const router = express.Router();

router.get("/:userId", getCart);
router.post("/", addToCart);
router.patch("/:userId", updateCart);
router.delete("/:userId", deleteCart);

export default router;
