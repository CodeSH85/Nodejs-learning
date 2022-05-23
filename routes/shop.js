const express = require('express');

const shopController = require('../controllers/shop');

// 路由守衛
const isLogin = require('../authGuard/is-login');

////////////////////////////////////////////////////////////

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/cart', isLogin, shopController.getCart);

router.get('/orders', isLogin, shopController.getOrders);

router.post('/cart-add-item', isLogin, shopController.postCartAddItem);

router.post('/cart-delete-item', isLogin, shopController.postCartDeleteItem);

router.post('/create-order', isLogin, shopController.postOrder);

module.exports = router;
