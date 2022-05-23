// require(url): 自路徑載入模組，可將模組路徑給予變數方便使用
// 第一個區塊 內建模組

// 第一個區塊 內建模組
const path = require('path');


// 第二個區塊 第三方模組(套件)
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
const csrfProtection = require('csurf');
const bcryptjs = require('bcryptjs');

// 第三個區塊 自建模組
const database = require('./utils/database');
const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/404');
const Product = require('./models/product');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const User = require('./models/user');


//===============================================


// 使用express套件
const app = express();

const port = 3001;
const oneDay = 1000 * 60 * 60 * 24;

//使用ejs
app.set('view engine', 'ejs');
app.set('views', 'views'); // 預設路徑就是 views，如果沒有變動，可以省略此設定

// express.static : 載入靜態資源(css,img..)
app.use(express.static(path.join(__dirname, 'public')));

// express-session 設定
app.use(session({
  secret: 'sessionToken', // 加密用的字串
  resave: false, // 沒變更內容是否強制回存
  saveUninitialized: false, // 新 session 未變更內容是否儲存
  cookie: {
    maxAge: oneDay // session 狀態儲存多久？單位為毫秒
  }
}));

// 使用connect-Flash
app.use(connectFlash());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(csrfProtection());

// 取得 User Model (如果已登入的話)
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findByPk(req.session.user.id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log('find user by session id error: ', err);
    })
});



// locals : express提供的全域變數
app.use((req, res, next) => {
  res.locals.pageTitle = 'Book Your Books online';
  res.locals.path = req.url;
  res.locals.isLogin = req.session.isLogin || false; // 在local中儲存isLogin變數供所有視圖使用
  res.locals.csrfToken = req.csrfToken();
  next(); // 繼續前往下一個仲介軟體
});


// 定義 cart 模型關聯
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {
  through: CartItem
});
Product.belongsToMany(Cart, {
  through: CartItem
});

// 使用路由資料夾
app.use(authRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

// app.listen(3001, () => {
//   console.log('running server on port 3001');
// });

// 使用Sequelize連結 DB
database
  // .sync()
  .sync({
    force: true
  }) // 和 db 連線時，強制重設 db
  .then((result) => {
    Product.bulkCreate(products);
    app.listen(port, () => {
      console.log(`Web Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('create web server error: ', err);
  });

const products = [{
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
  {
    title: '五月是你的謊言 4',
    price: 80,
    description: '在小薰的逼迫之下，公生不得不參加音樂比賽。為了參加比賽，公生從早到晚不停的練習，但就是無法彈奏出屬於自己的巴哈與蕭邦。此時，公生的面前出現兩位強勁的對手-相座武士與井川繪見，他們曾經是公生的手下敗將，一心想在比賽中擊敗公生雪恥。先上台演奏的武士彈奏出令全場喝采的激昂樂章…',
    imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/76/0010627615.jpg&v=5315ab5f&w=348&h=348'
  },
];