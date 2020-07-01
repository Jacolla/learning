let request = require("request");
const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require("constants");

request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body){
    if(!error && Response.statusCode == 200){
        eval(require("locus"));
        let parseData = JSON.parse(body);
        console.log(parseData["query"],["results"],["astronomy"],["sunset"]);
    };
});

// Está mal, revisar
// Quedan 8 dias... 
// confusion porque a veces cambiaba el dia por la noche
