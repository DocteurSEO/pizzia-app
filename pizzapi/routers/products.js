const express = require('express');
const { getProducts, createProduct, updateProduct, getProductById, deleteProduct } = require('../controllers/products.js');
const { requireAuth } = require('../middlewares/auth.js');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', requireAuth, createProduct);
router.put('/:id', requireAuth, updateProduct);
router.delete('/:id', requireAuth, deleteProduct);

module.exports = router;