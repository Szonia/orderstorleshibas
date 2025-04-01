import express from "express";
import { register, login, resetPassword } from "../controllers/authController"; // 🔹 Importálás helyesen!

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/reset-password", resetPassword); // 🔹 Új jelszó visszaállítási útvonal

export default router;
