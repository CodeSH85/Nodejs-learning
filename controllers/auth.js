const getLogin = (req, res) => {
  res.status(200)
  .render('login',{
    path: '/login',
    pageTitle: 'Login Page' 
  });
};

const postLogin = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.redirect('/');
    console.log('Form-data',req.body);
  } else {
    console.log('欄位尚未填寫完成！')
  }
};

const postLogout = (req, res) => {
  res.redirect('/login');
};

module.exports ={
  getLogin, postLogin, postLogout
};
