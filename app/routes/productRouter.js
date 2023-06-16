const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require('../controllers/productController');
const checkJwt = require('../../middlewares/checkJwt');
const cache = require('../../middlewares/cache');

// Get all products
router.get('/', cache, getProducts);

// Get a single product by id
router.get('/:id', cache, getProductById);

// Create a new product
router.post('/', checkJwt, createProduct);

// Update a product by id
router.put('/:id', checkJwt, updateProductById);

// Delete a product by id
router.delete('/:id', checkJwt, deleteProductById);

module.exports = router;
