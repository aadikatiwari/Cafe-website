import express from "express";
import Reservation from "../models/Reservation.js";
import Contact from "../models/Contact.js";
import Newsletter from "../models/Newsletter.js";
import Menu from "../models/Menu.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const reservations = await Reservation.countDocuments();
    const contacts = await Contact.countDocuments();
    const subscribers = await Newsletter.countDocuments();
    const menuItems = await Menu.countDocuments();

    res.json({
      reservations,
      contacts,
      subscribers,
      menuItems,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;