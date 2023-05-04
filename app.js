const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index")
})

app.get("/signin", function(req,res){
    res.render("signin")
})

app.get("/register", function(req,res){
    res.render("register")
})

app.get("/pricing", function(req,res){
    res.render("pricing")
})

app.get("/congrats", function(req,res){
    res.render("congrats")
})

app.get("/download", function(req,res){
    res.render("download")
})

app.get("/features", function(req,res){
    res.render("download")
})

app.get("/test", function(req,res){
    res.render("test")
})

module.exports = app;



app.listen(4000,"192.168.1.14" ,function() {
    console.log("Server started on port 4000");
  });
