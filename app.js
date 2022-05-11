//console.log('hello,world');

// require(url): 自路徑載入模組，可將模組路徑給予變數方便使用
// 第一個區塊 內建模組

// 內建模組不需使用檔案路徑，可直接引用
const path = require('path');
const http = require('http');

// 第二個區塊 第三方模組(套件)

// 第三個區塊 自建模組
const hello = require('./hello');

//===============================================

// hello.sayHello(): 使用 hello模組 中的 sayHello()方法 

hello.sayHello();

console.log(hello.title);
