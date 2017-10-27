// Connecting Node to burgers_db in MySQL 
// and then exporting the connection
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Database!DreamGirl28',
  database : 'burgers_db'
});

module.exports = connection; 