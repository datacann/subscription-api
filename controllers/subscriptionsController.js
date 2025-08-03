const Subscription = require('../models/Subscriptions');

exports.createSubscription = async (req, res) => {
  try {
    const savedSubs = await Subscription.insertMany(req.body);
    res.status(201).json(savedSubs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  };

const mongoose = require('mongoose');

exports.editSubscription = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Geçersiz ID formatı' });
    }
    const updatedSub = await Subscription.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    if (!updatedSub) {
      return res.status(404).json({ error: 'Abonelik bulunamadı' });
    }
    res.json(updatedSub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};