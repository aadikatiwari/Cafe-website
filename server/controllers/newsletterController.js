import Newsletter from "../models/Newsletter.js";

// Subscribe
export const subscribeNewsletter = async (req, res) => {
  try {
    const existing = await Newsletter.findOne({
      email: req.body.email,
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Email already subscribed.",
      });
    }

    const newsletter = await Newsletter.create(req.body);

    res.status(201).json({
      success: true,
      message: "Subscribed successfully!",
      newsletter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Subscribers
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({
      createdAt: -1,
    });

    res.json(subscribers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Subscriber
export const deleteSubscriber = async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Subscriber removed successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};