// // get the client
// const mysql = require('mysql2');

// // Create the connection pool. The pool-specific settings are the defaults
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'admin',
//   database: 'node_schema',
//   password:"password",
// });

// module.exports=pool.promise();


const Sequelize=require('sequelize');


const sequelize=new Sequelize('node_schema','admin','password',{
  host:'localhost',
  dialect:'mysql'
});

module.exports=sequelize;