const express = require('express');
const { authRegister, authLogin, authProfile, authLogout } = require('../controllers/auth');
const router = express.Router();

router.post('/register', authRegister);
router.post('/login', authLogin);
router.delete('/login', authLogout);
router.get('/profile', authProfile);

module.exports = router;