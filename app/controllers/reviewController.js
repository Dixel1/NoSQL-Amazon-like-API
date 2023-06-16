const Review = require('../models/reviewModel');
const Product = require('../models/productModel');

// Get all reviews for a product by id
exports.getReviewsByProductId = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.id }).populate(
      'user',
      'name'
    );

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new review for a product by id
exports.createReviewByProductId = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const review = new Review({
      user: req.userId,
      product: req.params.id,
      rating,
      comment,
    });

    await review.save();

    // Update the product rating and number of reviews
    const reviews = await Review.find({ product: req.params.id });

    const numReviews = reviews.length;

    const totalRating =
      reviews.reduce((acc, item) => acc + item.rating, 0) / numReviews;
      product.rating = totalRating;
      product.numReviews = numReviews;
  
      await product.save();
  
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update a review by id
  exports.updateReviewById = async (req, res) => {
    try {
      const { rating, comment } = req.body;
  
      const review = await Review.findById(req.params.id);
  
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
  
      // Check if the user is the owner of the review
      if (review.user.toString() !== req.userId) {
        return res.status(401).json({ message: 'Not authorized' });
      }
  
      review.rating = rating;
      review.comment = comment;
  
      await review.save();
  
      // Update the product rating and number of reviews
      const reviews = await Review.find({ product: review.product });
  
      const numReviews = reviews.length;
  
      const totalRating =
        reviews.reduce((acc, item) => acc + item.rating, 0) / numReviews;
  
      const product = await Product.findById(review.product);
  
      product.rating = totalRating;
      product.numReviews = numReviews;
  
      await product.save();
  
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete a review by id
  exports.deleteReviewById = async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
  
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
  
      // Check if the user is the owner of the review
      if (review.user.toString() !== req.userId) {
        return res.status(401).json({ message: 'Not authorized' });
      }
  
      await review.remove();
  
      // Update the product rating and number of reviews
      const reviews = await Review.find({ product: review.product });
  
      const numReviews = reviews.length;
  
      const totalRating =
        reviews.reduce((acc, item) => acc + item.rating, 0) / numReviews;
  
      const product = await Product.findById(review.product);
  
      product.rating = totalRating;
      product.numReviews = numReviews;
  
      await product.save();
  
      res.json({ message: 'Review deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  