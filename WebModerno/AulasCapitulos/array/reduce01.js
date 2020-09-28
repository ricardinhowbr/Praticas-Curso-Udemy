const alunos = [
    { nome: 'Luffy', nota: 7.3, bolsista: false },
    { nome: 'Zoro', nota: 9.2, bolsista: true },
    { nome: 'Nami', nota: 9.8, bolsista: false },
    { nome: 'Sanji', nota: 8.7, bolsista: true }
];

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 0);

console.log(resultado);