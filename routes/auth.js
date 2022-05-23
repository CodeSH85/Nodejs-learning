
   
const express = require('express');

const authController = require('../controllers/auth');

// 路由守衛
const isLogin = require('../authGuard/is-login');

////////////////////////////////////////////////////////////

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup)

router.post('/login', authController.postLogin);

router.post('/logout', authController.postLogout);

router.post('/signup', authController.postSignup);

module.exports = router;
