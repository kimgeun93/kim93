var mysql = require('mysql');



var dbconnection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'sa435440',
    port : 3306,
    database:'sakila'
});

dbconnection.connect();


dbconnection.query('select * from testpage', function (err, rows, fields) {
  if(!err)
     console.log(rows);
  else  
     console.log(err);
});

dbconnection.end();
