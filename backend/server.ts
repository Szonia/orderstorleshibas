import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";
import cartRoutes from "./routes/carts";
import authRoutes from "./routes/auth";
import orderRoutes from "./routes/orders";
import adminRoutes from "./routes/admin"; 

const app = express();

const corsOptions = {
  origin: "http://localhost:4200", 
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));  
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);  
app.use("/api/admin", adminRoutes);  

export default app;
