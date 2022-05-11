// module 模組
//hello.js

const sayHello = () => {
  console.log('Hello!');
};

// 輸出模組.模組名稱 = 模組內容
// 模組名稱與內容不一定需要一至
module.exports.say = sayHello;

// 物件式寫法（較常用，方便管理）

const sayGoodnight = () => {
  console.log('Good Night!');
};

const title = 'I am Hello Module!';

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