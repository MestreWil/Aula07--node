const mysql = require('mysql');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root', 
    password : '',
    database : 'loja'
});

const server =  http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", 'application/json');

    conn.connect(function(erro){
        if( !erro ){
            sql = ("SELECT p.nome, p.preco, p.quantidade, c.nome as Cat  FROM produto p INNER JOIN categoria c ON c.id = p.categoria"); 
            conn.query( sql, function(err, result, fields){
                if( !err ){
                    res.end(JSON.stringify(result));
                } else {
                    res.end('KKKKKKK SE FUDEO');
                }
            });
        } else {
            res.end('KKKKKKKKk SE FUDEO')
        } 
    });
});
server.listen(port, hostname, () => {
    console.log(`Servidor sendo executado em http://${hostname}:${port}/`);
});
