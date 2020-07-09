let request = require('request');

request('https://jsonplaceholder.typicode.com/todos', function(error, response, body){
    if(!error && response.statusCode == 200){
        let parseData = JSON.parse(body);
        console.log(parseData);
    };
});

