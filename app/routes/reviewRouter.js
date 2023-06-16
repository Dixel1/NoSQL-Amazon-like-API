const express = require('express');
const router = express.Router();
const {
  getReviewsByProductId,
  createReviewByProductId,
  updateReviewById,
  deleteReviewById,
} = require('../controllers/reviewController');
const checkJwt = require('../../middlewares/checkJwt');

// Get all reviews for a product by id
router.get('/product/:id', getReviewsByProductId);

// Create a new review for a product by id
router.post('/product/:id', checkJwt, createReviewByProductId);

// Update a review by id
router.put('/:id', checkJwt, updateReviewById);

// Delete a review by id
router.delete('/:id', checkJwt, deleteReviewById);

module.exports = router;
