// -> "__dirname" é uma constante com o path atual no node.
const fs = require('fs');

const caminho =  __dirname + '/arquivo.json';

// Sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

// Arquivo já convertido em Objeto.
const config = require('./arquivo.json');
console.log(config.db);

// Leitura de diretório retornando  um Array com todos os arquivos do diretório.
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta...");
    console.log(arquivos);
});