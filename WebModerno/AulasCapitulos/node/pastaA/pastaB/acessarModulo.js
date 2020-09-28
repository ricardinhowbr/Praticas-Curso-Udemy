//C:\Users\ricar\Desktop\Udemy\cursos\WebModerno\AulasCapitulos\node\moduloA.js
//const saudacao = require('saudacao');
const moduloA = require('../../moduloA');

console.log(moduloA.ola);
//console.log(saudacao.ola);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);