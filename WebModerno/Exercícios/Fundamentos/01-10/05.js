function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

function conversor(numero) {
    return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}).replace(".", ",");
}

console.log(conversor(0.30000000000000004));