const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController');
const checkJwt = require('../../middlewares/checkJwt');

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get the profile of a logged in user
router.get('/profile', checkJwt, getUserProfile);

// Update the profile of a logged in user
router.put('/profile', checkJwt, updateUserProfile);

module.exports = router;
