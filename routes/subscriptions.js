const express = require('express');
const router = express.Router();

const {
  createSubscription,
  getSubscriptions,
  editSubscription,
  deleteSubscription
} = require('../controllers/subscriptionsController');

router.post('/add', createSubscription);
router.get('/', getSubscriptions);
router.put('/:id', editSubscription);
router.delete('/:id', deleteSubscription);

module.exports = router;