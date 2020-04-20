var express = require("express");
var app = express();

/*          ---Puerto---         */
app.listen(3000, function(){
    console.log("       ---Server is working---     ");
});


/*  ---Lo que sale en pantalla --- */
app.get("/", function(req, res){
    res.send("Bienvenido al puerto 3000 desde proyecto con EJS");
});


app.get("/enamorarse/:algo", function(req, res){
    var thing= req.params.algo;
    res.render("home.ejs", {thingVar: thing});
});