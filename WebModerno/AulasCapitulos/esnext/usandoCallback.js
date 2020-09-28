// Nessa aula não tem nenhum recurso novo do ECMAScript.
// Analisar a melhoria de Promise no lugar de callbacks.

// -> modulo interno do node.
const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    http.get(url, res => {
        let resultado = '';

        res.on('data', dados => {
            resultado += dados;
        });

        // -> Eu sei que este exemplo vai retornar um JSON.
        res.on('end', () => {
            callback(JSON.parse(resultado));
        });
    });
}

let nomes = [];

// -> Callback hell
getTurma('A', alunos => {
    //console.log(alunos);
    nomes = nomes.concat(alunos.map(a =>  `A: ${a.nome}`));

    getTurma('B', alunos => {
        //console.log(alunos);
        nomes = nomes.concat(alunos.map(a =>  `B: ${a.nome}`));

        getTurma('C', alunos => {
            //console.log(alunos);
            nomes = nomes.concat(alunos.map(a =>  `C: ${a.nome}`));
            console.log(nomes);
        });
    });
});