//console.log('hello,world');

// require(url): 自路徑載入模組，可將模組路徑給予變數方便使用
// hello.say(): 使用 hello 中的 say()方法 

const hello = require('./hello');

hello.sayHello();

console.log(hello.title);
