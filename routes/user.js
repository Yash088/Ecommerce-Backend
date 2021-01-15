var express = require('express');
var router = express.Router();
const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList
} = require('../controllers/user');
const { isSignedin, isAuthenticated, isAdmin } = require('../controllers/auth');

router.param('userId', getUserById);

router.get('/user/:userId', isSignedin, isAuthenticated, getUser);
// router.get('/users', getAllUser);

router.put('/user/:userId', isSignedin, isAuthenticated, updateUser);
router.put(
  'orders/user/:userId',
  isSignedin,
  isAuthenticated,
  userPurchaseList
);
module.exports = router;
