// Cmm promises
// -> modulo interno do node.
const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';
    
            res.on('data', dados => {
                resultado += dados;
            });
    
            // -> Eu sei que este exemplo vai retornar um JSON.
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                }
                catch(ex) {
                    reject(ex);
                }
            });
        });
    })
}

let nomes = [];

// // -> Callback hell
// getTurma('A').then(alunos => {
//     //console.log(alunos);
//     nomes = nomes.concat(alunos.map(a =>  `A: ${a.nome}`));

//     getTurma('B').then(alunos => {
//         //console.log(alunos);
//         nomes = nomes.concat(alunos.map(a =>  `B: ${a.nome}`));

//         getTurma('C').then(alunos => {
//             //console.log(alunos);
//             nomes = nomes.concat(alunos.map(a =>  `C: ${a.nome}`));
//             console.log(nomes);
//         });
//     });
// });

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message));
    //.then(x => console.log(x))

getTurma('D').catch(e => console.log(e.message));