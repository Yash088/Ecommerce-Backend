var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const { signout, signup, login, isSignedin } = require('../controllers/auth');

router.post(
  '/login',
  [
    check('email', 'Invalid Email').isEmail(),
    check('password', 'Invalid Passwrd length').isLength({ min: 3 })
  ],
  login
);

router.post(
  '/signup',
  [
    check('name', 'name should be at least 3 char').isLength({ min: 3 }),
    check('email', 'email is required').isEmail(),
    check('password', 'password should be at least 3 char').isLength({ min: 3 })
  ],
  signup
);
router.get('/signout', signout);

router.get('/testroute', isSignedin, (req, res) => {
  res.send('A protected route');
});
module.exports = router;
