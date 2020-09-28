const fs = require('fs');
const path = require('path');
const { resolve } = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const lerArquivo = caminho => {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString());
        });

        console.log("-> Depois de ler, sqn!")
    })
} 


//lerArquivo(caminho).then(console.log);
lerArquivo(caminho)
    .then(conteudo =>  conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
