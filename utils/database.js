const Sequelize = require('sequelize');

//=================================================

const database = new Sequelize('demo', 'root', 'mysqlroot', {
    dialect: 'mysql', 
    host: '127.0.0.1'
});

// const database = new Sequelize ('demo', 'admin', 'admin', {
// 	dialect: 'mysql',
// 	host: '130.211.120.155'
// });

module.exports = database;