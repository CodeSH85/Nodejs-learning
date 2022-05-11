//console.log('hello,world');

// require(url): 自路徑載入模組，可將模組路徑給予變數方便使用
// 第一個區塊 內建模組

// 內建模組不需使用檔案路徑，可直接引用
// const path = require('path');
const http = require('http');

// 第二個區塊 第三方模組(套件)

//const express = require('express');
//const cowsay = require('cowsay');

// 第三個區塊 自建模組
//const hello = require('./hello');

//===============================================

// hello.sayHello(): 使用 hello模組 中的 sayHello()方法

//hello.sayHello();

//console.log(hello.title);

//==================================================

const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);

  console.log('req url: '+ req.url);
  if (req.url === '/') {
    // 指定回傳狀態 http狀態碼 、 MIME type (此處是html格式)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // 回傳的網頁內容 務必.end結束回傳
    return res.end("<h1>This is Home page</h1>");
  };
  if (req.url === '/login') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end("<h1>This is login page</h1>");
  };
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>page not found :(</h1>');
});

server.listen(3001, () => {
	console.log('running server on port 3001');
});

// 使用 url 模組來分析 URL
const url = require('url');

console.log(url.parse('https://www.twitch.tv/riotgames'));

//==========================================

