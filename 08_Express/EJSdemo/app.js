var express = require("express");
var app = express();
app.use(express.static("public"));


/*          ---Puerto---         */
app.listen(3000, function(){
    console.log("       ---Server is working---     ");
});


/* -----Home----- */
app.get("/home", function(req, res){
    res.render("home.ejs");
});

/* -----Motos----- */
app.get("/motos/:algo", function(req, res){
    var thing= req.params.algo;
    res.render("motos.ejs", {thingVar: thing});
});

/* -----Posts----- */
app.get("/posts", function(req, res){
    var posts= [
        {title: "Jaume I", autor: "Albert Salvador"},
        {title: "Silmarilion", autor: "Tolkien"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
        {title: "RandomBook", autor: "Random"},
    ];
    res.render("posts.ejs", {posts:posts})
})