const criarProduto = (nome, preco, desconto = 0.1) => {
    return {
        nome: nome,
        preco: preco,
        desconto: desconto,
        precoComDesconto: () => preco - (preco * desconto)
    }
}

const prod1 = criarProduto("NoteBook", 2199.49);
console.log(prod1, prod1.precoComDesconto());

const prod2 = criarProduto("Ipad", 1199.49);
console.log(prod2, prod2.precoComDesconto());