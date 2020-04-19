
var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('---Server working on port 3000!---');
});

app.get('/', function (req, res) {
    res.send('Bienvenido al puerto 3000 compare!');
});

app.get("/adios", function(req, res){
    res.send("Hasta luegito!")
})

app.get("/entrada", function(req, res){
    res.send("Hola, bienvenido a mi servidor, estas hospedado en el puerto3000")
})


app.get('/r/:section/comments/:id/:tittle', function (req, res){
    var identification= req.params.id;
    var sect= req.params.section;
    res.send("Bienvenido a " + sect + " de " + identification + ", supare.");
    console.log(req.params)
});

app.get("*", function(req, res){
    res.send("Caballero, eso no lo tenemos en nuestra base de datos.");
})

