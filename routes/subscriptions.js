const express = require('express');
const router = express.Router();

const {
  createSubscription,
  getSubscriptions
} = require('../controllers/subscriptionsController');

router.post('/', createSubscription);
router.get('/', getSubscriptions);

module.exports = router;