var express    =  require("express");  
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'sa435440',  
  database : 'sakila'  
});  


/////////////////////////////////////
var app = express();  

app.use(express.static(__dirname));        // 앱 설정하는곳

app.set('views', __dirname+'/views');           
app.set('view engine', 'ejs');   

app.get("/",function(request,response){  

  var rows;

response.render('home.ejs', {title : "kim-ggggg"});
});  

app.listen(3000);  


