function imprimirResultado (dividendo, divisor) {
    return `${dividendo/divisor}, ${dividendo%divisor}`;
}

console.log(imprimirResultado(1,2));
console.log(imprimirResultado(2,5));
console.log(imprimirResultado(12,2));
console.log(imprimirResultado(12,3));
console.log(imprimirResultado(15,2));
