var http = require('http');
var fs = require('fs');

var server = http.createServer(
    function(request, response){
        fs.readFile(__dirname + '/index.html',  function (erro, html) {
            response.writeHead(200, {"Content-Type" : "text/html"})
            response.write(html);
            response.end();
        });
    }
);

server.listen(3000, function(){
    console.log('Servidor em funcionamento!');    
});

// var conteudo = function (erro, html) {
//     response.writeHead(200, {"Content-Type" : "text/html"})
//     response.write(html);
//     response.end();
// }

// var requisicao = function(request, response){
//     fs.readFile(__dirname + '/index.html', conteudo);
// }


// var resultado = function(){
//     console.log('Servidor em funcionamento!');    
// }
