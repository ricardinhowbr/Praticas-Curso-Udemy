function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))

//
const exponencial = (base, expoente) => Math.pow(base, expoente);

console.log(exponencial(2, 4));
console.log(exponencial(2, 2));
console.log(exponencial(2, 3));

console.log(exponencial(1, 2));
console.log(exponencial(1, 3));
console.log(exponencial(1, 4));

console.log(exponencial(2, 1));
console.log(exponencial(3, 1));
console.log(exponencial(4, 1));

console.log(exponencial(2, 0));
console.log(exponencial(3, 0));
console.log(exponencial(4, 0));