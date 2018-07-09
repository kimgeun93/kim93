var express    =  require("express");  
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'sa435440',  
  database : 'sakila'  
});  

connection.connect(function(err){

  if(err){
    console.log(err);
  }
  else{
    console.log('성공');
  }

});

/////////////////////////////////////
var app = express();  

app.use(express.static(__dirname));        // 앱 설정하는곳

app.set('views', __dirname+'/views');           
app.set('view engine', 'ejs');   

app.get("/",function(request,response){  

  var rows;

connection.query('select * from testpage', function(err, row){
  if(!err){  
    console.log(row);
    
     rows = row;
  }
  else{
    console.log(err);
    
  }

});
connection.end();
response.render('home', {title : "kim-ggggg"});
});  

app.listen(3000);  


