import { Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";
import { firestore } from "./firebase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // 🔹 Titkos kulcs

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * 🔹 Felhasználó regisztrációja Firebase Authentication-nel
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Érvénytelen email formátum!" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ error: "A jelszónak legalább 6 karakter hosszúnak kell lennie!" });
    }

    // 🔹 Jelszó hashelése bcrypttel
    const hashedPassword = await bcrypt.hash(password, 10);

    const auth = getAuth();
    const userRecord = await auth.createUser({
      email,
      password, // 🔹 Firebase tárolja titkosítva
    });

    // 🔹 Firestore-ban felhasználói adatok mentése
    await firestore.collection("users").doc(userRecord.uid).set({
      email,
      password: hashedPassword, // 🔹 A Firestore nem titkosítja automatikusan!
      isAdmin: false,
    });

    res.status(201).json({ message: "Regisztráció sikeres!", uid: userRecord.uid });
  } catch (error: any) {
    console.error("❌ Hiba a regisztrációnál:", error);
    res.status(500).json({ error: error.message || "Hiba történt a regisztráció során." });
  }
};

/**
 * 🔹 Felhasználó bejelentkezése Firebase Authentication alapján
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email és jelszó megadása kötelező!" });
    }

    // 🔹 Felhasználó keresése Firestore-ban
    const userSnapshot = await firestore.collection("users").where("email", "==", email).get();
    if (userSnapshot.empty) {
      return res.status(401).json({ error: "Hibás email vagy jelszó!" });
    }

    const userData = userSnapshot.docs[0].data();
    const userId = userSnapshot.docs[0].id;

    // 🔹 Jelszó ellenőrzése bcrypt segítségével
    const passwordMatch = await bcrypt.compare(password, userData.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Hibás email vagy jelszó!" });
    }

    // 🔹 JWT Token generálása
    const token = jwt.sign({ uid: userId, isAdmin: userData.isAdmin }, JWT_SECRET, { expiresIn: "1h" });

    // 🔹 Visszaigazoló email küldése
    const auth = getAuth();
    const user = await auth.getUserByEmail(email);
    await auth.generateEmailVerificationLink(email); // Visszaigazoló link küldése

    res.json({ message: "Sikeres bejelentkezés! Visszaigazoló email küldve.", token });
  } catch (error: any) {
    console.error("❌ Hiba a bejelentkezésnél:", error);
    res.status(500).json({ error: error.message || "Hiba történt a bejelentkezés során." });
  }
};

/**
 * 🔹 Jelszó visszaállítása
 */
export const resetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const auth = getAuth();
    await auth.generatePasswordResetLink(email); // A Firebase automatikusan generálja a jelszó-visszaállító linket
    res.status(200).json({ message: "Jelszó visszaállító email elküldve." });
  } catch (error) {
    console.error("❌ Hiba a jelszó visszaállításakor:", error);
    res.status(500).json({ error: "Hiba történt a jelszó visszaállításakor." });
  }
};
