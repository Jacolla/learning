
var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('---Server working on port 3000!---');
});

app.get('/', function (req, res) {
    res.send('Hello world from Express!');
});

app.get("/adios", function(req, res){
    res.send("Hasta luegito!")
})

app.get("/hola", function(req, res){
    res.send("Hola, que tal?")
})

app.get("*", function(req, res){
    res.send("Caballero, eso no lo tenemos en nuestra base de datos.");
})


