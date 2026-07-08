import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/reservations", reservationRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/newsletter", newsletterRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Cafe Backend Running...");
});

app.get("/", (req, res) => {
  res.send("Cafe Backend Running...");
});

const PORT = process.env.PORT || 5176;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);