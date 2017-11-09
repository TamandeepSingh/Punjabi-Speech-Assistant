var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var app = express()

// listening port
app.listen(3000, function(err){
  if(err){
    console.log(err)
  }
  else{
    console.log("Listening to port 3000")
  }
});

// dependencies
app.use(bodyParser.urlencoded({ extented : true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// getting in views in public html file
app.use(express.static(__dirname + '/public/views'));

app.get('', function(req,res){
	res.sendFile(__dirname + 'index.html');
});

app.get('/music', function(req,res){
	res.sendFile(__dirname + 'music.html');
});
