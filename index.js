// console.log("Hello, world!")

const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const server =  http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plani');
    res.end('Vamo f1?');
});

server.listen(port, hostname, () => {
    console.log(`Servidor sendo executado em http://${hostname}:${port}/`);
})

