// Função callback do foreach recebe 3 parametros
// 1. valor
// 2. indice
// 3. array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados);