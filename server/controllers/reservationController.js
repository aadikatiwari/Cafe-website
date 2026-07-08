import Reservation from "../models/Reservation.js";

// Create Reservation
export const createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Reservation Successful",
      reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Reservations
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({
      createdAt: -1,
    });

    res.json(reservations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Reservation
export const deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Reservation Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};