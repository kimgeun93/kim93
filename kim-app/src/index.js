var mysql = require('mysql');

var dbconnection = mysql.createConnection({

    host:'localhost',
    user:'kim',
    password:'sa435440',
    port : 3306,
    database:'sakila'
});

dbconnection.connect();


dbconnection.query('select * from testpage', function (err, rows, fields) {
    console.log(rows);
  
});

dbconnection.end();