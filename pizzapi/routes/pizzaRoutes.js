const express = require('express');
const { getPizzas } = require('../controllers/pizzaControllers');
const router = express.Router();

router.get('/', getPizzas);

module.exports = router;