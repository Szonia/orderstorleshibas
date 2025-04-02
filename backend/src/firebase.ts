import admin from "firebase-admin";
import fs from "fs";

import path from "path";

const serviceAccountPath = path.resolve(__dirname, 'serviceAccountKey.json');
let serviceAccount;
try {
  serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
  console.log(serviceAccount); 
} catch (error) {
  console.error('Error reading or parsing the service account key:', error);
  process.exit(1);  
}

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
