let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs");

let lista = ["Perros","Caballos","Pony","Zariguella",]

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addElemento", function(req, res){
    let newItem = req.body.newItem;
    lista.push(newItem);
    console.log("Last added--> "+ newItem )
    res.redirect("/lista");
});

app.get("/lista", function(req, res){
    res.render("lista", {lista: lista});
});

app.listen(3000, function() {
    console.log("---------- Server working on port 3000 ----------");
  });