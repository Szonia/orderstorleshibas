import admin from "firebase-admin";
import fs from "fs";

// 🔹 JSON fájl beolvasása és parse-olása
const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app", // Firebase Realtime Database URL
  });
}

const db = admin.database(); // 🔹 Realtime Database referencia
const firestore = admin.firestore(); // 🔹 Firestore referencia
const auth = admin.auth(); // 🔹 Firebase Authentication referencia

export { db, firestore, auth }; // Az auth exportálása
