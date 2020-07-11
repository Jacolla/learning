// keys: General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb        | Thanks to 
//       Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb                |   Udemy

let express = require("express");
let app     = express();
let request = require("request");
app.set("view engine", "ejs");
app.get("/search", function(req,res){
    res.render("search")
});


app.get("/results", function(req,res){
    let cuestionario = req.query.busqueda;
    let url          = "http://www.omdbapi.com/?s=" + cuestionario + "&apikey=thewdb";

    request(url, function(error, response, body ){
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body)
            res.render("results", {data: data});
        };
    });
}); 

app.listen (3000, function(){
    console.log("Movie App ALIVE!")
});


