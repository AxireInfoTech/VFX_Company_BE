const express = require('express');
const {registerUser, loginUser } = require('../controllers/loginController');
const router = express.Router();
router.get('/register', registerUser);
router.get('/login', loginUser);
module.exports = router;