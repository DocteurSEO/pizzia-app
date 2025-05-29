const express = require('express');
const { getProducts, createProduct, updateProduct, getProductById, deleteProduct } = require('../controllers/products.js');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;