
   
const express = require('express');

const authController = require('../controllers/auth');

////////////////////////////////////////////////////////////

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/Signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/logout', authController.postLogout);

module.exports = router;
