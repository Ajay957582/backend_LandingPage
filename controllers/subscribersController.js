const Subscriber = require("../models/Subscriber");

const createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(409).json({ message: "Email already subscribed." });
    }

    // Add new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const giveSubscribersList = async (req, res) => {
  try {
    const subscribersList = await Subscriber.find();
    res.status(200).json(subscribersList);
  } catch (e) {
    res
      .status(500)
      .json({ message: "trouble in fetching giveSubscribersList" });
  }
};

module.exports = { giveSubscribersList, createSubscriber };
