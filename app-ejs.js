
// require(url): 自路徑載入模組，可將模組路徑給予變數方便使用
// 第一個區塊 內建模組

// 內建模組不需使用檔案路徑，可直接引用
const path = require('path');
// const http = require('http');

// 第二個區塊 第三方模組(套件)

const express = require('express');
const bodyParser = require('body-parser');
//const cowsay = require('cowsay');

// 第三個區塊 自建模組
//const hello = require('./hello');

//===============================================


// 使用express
const app = express();

// express 使用req, res, next
// 以下為自訂的express函式，需加上 next() express才能判斷下一步
//app.use((req, res, next) => {
  //console.log('Hello');
  //若不加上 next() 則伺服器將一直停留在目前階段
  //next();
//});

// express.static : 載入靜態資源(css,img..)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

//使用ejs
app.set('view engine', 'ejs');
app.set('views', 'views'); // 預設路徑就是 views，如果沒有變動，可以省略此設定

//處理 get 請求 (在 url 輸入"/"就是一種get請求)
app.get('/', (req, res) =>{
  // response 回應 http status 200
  res.status(200)
  // .sendFile(path.join(__dirname, 'views', 'index.html'));
  // 在 EJX 中帶入參數
  .render('index',{
    pageTitle: 'Book Your Books online'
  });
});

app.get('/login', (req, res) => {
  res.status(200)
  //.sendFile(path.join(__dirname, 'views', 'login.html'));
  .render('login',{
    pageTitle: 'Login Page' 
  });
});

app.post('/login',(req, res) => {

  const { email, password } = req.body;
  if (email && password) {
      res.redirect('/');
      console.log('Form-data',req.body);
  } else {
      console.log('欄位尚未填寫完成！')
  }
});

// 萬用路由要寫在所有的 get 處理之後，如果將它放置到之前，
// 那麼這個網站永遠不會看到 404 錯誤以外的頁面
app.get('*', (req, res) => {
  res.status(404)
  // .sendFile(path.join(__dirname, 'views', '404.html'));
  .render('404',{
    pageTitle: '404 Not Found' 
  });
});

app.listen(3001, () => {
  console.log('running server on port 3001');
});
