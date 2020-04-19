
var express = require('express');
var app = express();


/* Para comprobar que el sistema funciona */
app.listen(3000, function () {
  console.log('---Server working on port 3000!---');
});



/* Lo que sale en la web */
app.get('/', function (req, res) {
    res.send('Welcome to my assignment');
});



/*      ---speak---      */
app.get("/speak/:animal", function (req, res) {
    var sounds={
        perro: "Guau tronco",
        gato: "Olvidame sacomierda",
        ciervo: "Que es eso!?",
        caballo: "Noto algo en la cola... algo reseco...",
        toro: "Algun dia lo engancharé...",
        perezoso: "ufff se ve jodio",
    }
    
    var animal = req.params.animal.toLowerCase();
    var sound= sounds[animal];
    res.send("El  " + animal + " dice: '" + sound + "'")
});






/*      ---repeat---     */
app.get("/repeat/:wrd/:tms", function (req, res) {
    var times= Number(req.params.tms);
    var words= req.params.wrd;
    var resurtao = "";


    for(var i=0; i<times; i++){
        resurtao += words + " ";
    }
    
    res.send(resurtao)
});





/* Para lo que no esta en el servidor */
app.get("*", function(req, res){
    res.send("Caballero, eso no lo tenemos en nuestra base de datos.");
})
