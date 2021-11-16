const mysql = require('mysql');
const keys = require('./keys');

var con = mysql.createConnection({
    host: "databasenet-database",
    user: "root",
    password: "my-secret-pw",
    database : "iot"
  });

module.exports = con;