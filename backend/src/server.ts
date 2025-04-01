import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";
import cartRoutes from "./routes/carts";
import authRoutes from "./routes/auth";
import orderRoutes from "./routes/orders";
import adminRoutes from "./routes/admin";  // Admin útvonal

const app = express();

// CORS beállítások
const corsOptions = {
  origin: "http://localhost:4200",  // A frontend portja, amit engedélyezünk
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],  // Az engedélyezett HTTP metódusok
  allowedHeaders: ['Content-Type', 'Authorization'],  // Az engedélyezett header-ek
};

// Middleware beállítások
app.use(cors(corsOptions));  // Alkalmazza a CORS beállítást
app.use(express.json());

// API végpontok
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);  // Az autentikációs middleware már itt is működik
app.use("/api/admin", adminRoutes);  // Admin útvonal beállítása

export default app;
