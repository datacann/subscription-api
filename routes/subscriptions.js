const express = require('express');
const router = express.Router();

const {
  createSubscription,
  getSubscriptions,
  editSubscription
} = require('../controllers/subscriptionsController');

router.post('/add', createSubscription);
router.get('/', getSubscriptions);
router.put('/:id', editSubscription);

module.exports = router;