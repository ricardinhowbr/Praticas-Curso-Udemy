const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Luffy',
        nota: 8.1
    },
    {
        nome: 'Zoro',
        nota: 9.3
    }]
},
{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Sanji',
        nota: 8.9
    },
    {
        nome: 'Nami',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log([].concat([8.1, 9.3], [8.9, 7.3]));

Array.prototype.flatmap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas2 = escola.flatmap(getNotasDaTurma);
console.log(notas2)
