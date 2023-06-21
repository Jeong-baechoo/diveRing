const mysql = require("mysql");

const host = "localhost";

let connection = mysql.createConnection({
    host     : 'localhost', //실제로 연결할 데이터베이스의 위치
    user     : 'root',
    password : '1234',
    database : 'divering' //데이터베이스 이름
  });

  connection.connect();

  module.exports = connection;