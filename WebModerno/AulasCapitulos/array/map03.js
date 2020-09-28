// Implementação da função map
Array.prototype.map2 = function(callback) {
    const newArray = [];

    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os preços.
const paraObj = json => JSON.parse(json);
const apenasPreco2 = produto => produto.preco;

resultado = carrinho.map2(paraObj).map2(apenasPreco2);
console.log(resultado);