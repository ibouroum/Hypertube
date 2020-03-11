
const mysql = require('mysql');

  const DB_HOST = process.env.DB_HOST;
  const DB_NAME = process.env.DB_NAME;
  const DB_PASS = process.env.DB_PASS;
  const DB = process.env.DB;
 const conn = mysql.createConnection({
      host : DB_HOST,
      user : DB_NAME,
      password : DB_PASS,
      database : DB
  })
  conn.connect(function(err){
       if(err){
           throw err;
     }
   });
   module.exports = conn;