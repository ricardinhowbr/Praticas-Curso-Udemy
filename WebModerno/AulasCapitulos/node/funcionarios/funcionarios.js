const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const mulheres = funcionario => funcionario.genero == "F";
const chineses = funcionario => funcionario.pais == "China";

// * Não conseguir resolver o menor salario com reduce...
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios.filter(mulheres).filter(chineses).reduce(menorSalario));
});

