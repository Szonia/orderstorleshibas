import admin from "firebase-admin";
import fs from "fs";

import path from "path";

// 🔹 Load and parse the service account key
const serviceAccountPath = path.resolve(__dirname, 'serviceAccountKey.json');
let serviceAccount;
try {
  serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
  console.log(serviceAccount);  // Log to verify
} catch (error) {
  console.error('Error reading or parsing the service account key:', error);
  process.exit(1);  // Exit if the file is not found or cannot be parsed
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app",
  });
}


const db = admin.database(); // 🔹 Realtime Database referencia
const firestore = admin.firestore(); // 🔹 Firestore referencia
const auth = admin.auth(); // 🔹 Firebase Authentication referencia

export { db, firestore, auth }; // Az auth exportálása
