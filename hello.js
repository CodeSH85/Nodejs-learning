// module 模組
//hello.js
const path = require('path');

const sayHello = () => {
  console.log('Hello!');
};

const sayGoodnight = () => {
  console.log('Good Night!');
};

const title = 'I am Hello Module!';

// 輸出模組.模組名稱(供外部引用) = 模組內容
// 模組名稱與內容不一定需要一至
module.exports.say = sayHello;

// 物件式寫法（較常用，方便管理）

// module.exports = {
//   sayHello: sayHello,
//   sayGoodnight: sayGoodnight,
//   title : 'I am Hello Module'
// };

// 簡寫寫法
module.exports = {
  sayHello, // = sayHello : sayHello
  sayGoodnight,
  title
};

console.log('module', module);
console.log('dirname', __dirname);
console.log('filename',__dirname );
console.log(path.join(__dirname, 'index.js'));