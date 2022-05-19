const express = require ('express');

// =====================================

const router = express.Router();

router.get('/login', (req, res) => {
  res.status(200)
  .render('login',{
    path: '/login',
    pageTitle: 'Login Page' 
  });
});

router.post('/login',(req, res) => {
  // const { email, password } = req.body;
  // if (email && password) {
  //   res.redirect('/');
  //   console.log('Form-data',req.body);
  // } else {
  //   console.log('欄位尚未填寫完成！')
  // }
  res.redirect('/');
});


router.post('/logout',(req, res) => {

  res.redirect('/login');
  console.log('Form-data',req.body);

});

module.exports = router;
