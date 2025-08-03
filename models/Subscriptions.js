const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  renewDate: {
    type: Date,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
