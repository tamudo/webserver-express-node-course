const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'pepe',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    res.end(); //necesario

});

server.listen(8080);

console.log('Èscuchando puerto 8080');