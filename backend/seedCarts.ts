import { db } from "./src/firebase"; // Firebase kapcsolat importálása

const seedCarts = async () => {
  const cartsRef = db.ref("carts"); // Hivatkozás a "carts" csomópontra

  const sampleCarts = {
    user123: {
      items: {
        product123: { quantity: 2 },
        product124: { quantity: 1 }
      }
    },
    user456: {
      items: {
        product125: { quantity: 3 },
        product126: { quantity: 2 }
      }
    }
  };

  try {
    await cartsRef.set(sampleCarts);
    console.log("✅ Carts adatbázis feltöltve!");
  } catch (error) {
    console.error("❌ Hiba történt:", error);
  }
};

// Script futtatása
seedCarts();
