// -> Função de alta ordem.

// -> O retorno padrão da função em javascript é "undefined"

// -> criar de forma literal
function funcao1 () { }

// -> Armazenar funcão em uma variável
const funcao2 = function () { }

// -> Armazenar função em um array
const array = [function(a, b) { return a + b }, funcao1, funcao2];
console.log(array[0](2, 3));

// -> Armazenar função em um Objeto.
const obj = {};
obj.falar = function () { return "Opa!"};
console.log(obj.falar());

// -> Passar função como parâmetro.
function run(fun) {
    fun();
}

run(function () { console.log(`Executando...`)});

// -> retornar/conter função como parâmetro.
function soma (a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
