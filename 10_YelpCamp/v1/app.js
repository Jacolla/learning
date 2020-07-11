let express    = require("express");
let app        = express();
let bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

let lands = [
    {name: "Pescao Vendido", imagen: "https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236__340.jpg"},
    {name: "Carner Vendida", imagen: "https://cdn.pixabay.com/photo/2020/07/06/20/55/portrait-5378357__340.jpg"},
    {name: "Verdura Vendido", imagen: "https://cdn.pixabay.com/photo/2020/07/08/07/19/hover-fly-5382916__340.jpg"},
    {name: "Salsa Vendida", imagen: "https://cdn.pixabay.com/photo/2020/05/24/11/07/mt-cook-5213709__340.jpg"},
]

app.get("/cabesero", function (req,res){
    res.render("cabesero");
});


app.get("/lands", function (req,res){
    res.render("lands", {lands: lands});
});

app.get("/lands/new", function(req,res){
    res.render("new.ejs")
})

app.post("/lands", function(req,res){                               /* Se puede utilizar mismo nombre, pero la ruta es diferente, literalmente. */
    let name     = req.body.name;
    let imagen   = req.body.imagen;
    let newLands = {name:name, imagen:imagen}
    lands.push(newLands);
    res.redirect("/lands");
})




app.listen (3000, function(){
    console.log("Let's get to YelpCamp");
});
