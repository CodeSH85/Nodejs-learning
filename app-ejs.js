
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
    pageTitle: 'Book Your Books online',
    products,
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

const products = [
  {
      title: '四月是你的謊言 1',
      price: 80,
      description: '有馬公生的母親一心想把有馬培育成舉世聞名的鋼琴家，而有馬也不負母親的期望，在唸小學時就贏得許多鋼琴比賽的大獎。11歲的秋天，有馬的母親過世，從此他再也聽不見自己彈奏的鋼琴聲，沮喪的他也只好放棄演奏，但在14歲那年，經由兒時玩伴的介紹，有馬認識了小提琴手宮園薰，並被薰的自由奔放吸引，沒想到薰竟開口邀請公生在比賽時擔任她的伴奏…',
      imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/25/0010622563.jpg&v=52dcfd21&w=348&h=348'
  },
  {
      title: '四月是你的謊言 2',
      price: 80,
      description: '公生答應在二次預賽中擔任小薰的鋼琴伴奏。比賽一開始公生還能順利彈琴，但在中途又再次因為聽不見鋼琴的聲音而停手。沒想到小薰也跟著停止演奏、等候公生。原本心灰意冷的公生因此重新振作，與小薰合奏出驚人的樂章…......',
      imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/31/0010623172.jpg&v=52dcfd21&w=348&h=348'
  },
  {
      title: '四月是你的謊言 3',
      price: 80,
      description: '在小薰的逼迫之下，公生不得不參加音樂比賽。為了參加比賽，公生從早到晚不停的練習，但就是無法彈奏出屬於自己的巴哈與蕭邦。此時，公生的面前出現兩位強勁的對手-相座武士與井川繪見，他們曾經是公生的手下敗將，一心想在比賽中擊敗公生雪恥。先上台演奏的武士彈奏出令全場喝采的激昂樂章…',
      imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/76/0010627615.jpg&v=5315ab5f&w=348&h=348'
  },
];