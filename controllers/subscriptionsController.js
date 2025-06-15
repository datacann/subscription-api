const Subscription = require('../models/Subscriptions');

// Create
exports.createSubscription = async (req, res) => {
  try {
    const newSub = new Subscription(req.body);
    const savedSub = await newSub.save();
    res.status(201).json(savedSub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read
exports.getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};