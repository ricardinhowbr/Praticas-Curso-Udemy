const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os preços.
let resultado = carrinho.map(e => JSON.parse(e).preco);
console.log(resultado);

// Solução do desafio.
const paraObj = json => JSON.parse(json);
const apenasPreco2 = produto => produto.preco;

resultado = carrinho.map(paraObj).map(apenasPreco2);
console.log(resultado);