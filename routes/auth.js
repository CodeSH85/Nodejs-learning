const express = require ('express');

const authController = require ('../controllers/auth');

// =====================================

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/login', authController.postLogin);

router.get('/login', authController.postLogout);


router.post('/logout',(req, res) => {

  res.redirect('/login');
  // console.log('Form-data',req.body);

});

module.exports = router;
