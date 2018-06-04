var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/",function(req, res){
    res.send("Hello world");

});
app.get("/hello/:name/:nom",function(req, res){
    res.send("Hello " + req.params.name + req.param.nom +" with the age of " + req.query.age);

});

app.use("/api", require("./apiRoutes"));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
