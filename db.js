const mysql = require('mysql');
const keys = require('./keys');

var con = mysql.createConnection({
    host: "database",
    user: "root",
    password: "my-secret-pw",
    database : "test"
  });

module.exports = con;