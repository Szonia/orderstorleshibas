import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app",
  });
}

const db = admin.database(); 
const firestore = admin.firestore();
const auth = admin.auth(); 

export { db, firestore, auth }; 
