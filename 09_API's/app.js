let request = require("request");

request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body){
    if(!error && Response.statusCode == 200){
        eval(require("locus"));
        let parseData = JSON.parse(body);
        console.log(parseData["query"],["results"],["astronomy"],["sunset"]);
    };
});

// Está mal, revisar
// esque me quedan 23 dias
