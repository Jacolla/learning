
var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('---Server working on port 3000!---');
});

app.get('/', function (req, res) {
    res.send('ahora otra cosa!');
});

app.get("/adios", function(req, res){
    res.send("Hasta luegito!")
})

app.get("/entrada", function(req, res){
    res.send("Hola, bienvenido a mi servidor, estas hospedado en el puerto3000")
})

app.get("*", function(req, res){
    res.send("Caballero, eso no lo tenemos en nuestra base de datos.");
})


// todayIsTimeToRead codeComplete vol.2