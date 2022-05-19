// require(url): 自路徑載入模組，可將模組路徑給予變數方便使用
// 第一個區塊 內建模組

// 內建模組不需使用檔案路徑，可直接引用
const path = require('path');

// 第二個區塊 第三方模組(套件)

const express = require('express');
const bodyParser = require('body-parser');

// 第三個區塊 自建模組
const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop'); 
const errorRoutes = require('./routes/404');

//===============================================


// 使用express
const app = express();

// express.static : 載入靜態資源(css,img..)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

//使用ejs
app.set('view engine', 'ejs');
app.set('views', 'views'); // 預設路徑就是 views，如果沒有變動，可以省略此設定

// 使用路由資料夾
app.use(authRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3001, () => {
  console.log('running server on port 3001');
});
