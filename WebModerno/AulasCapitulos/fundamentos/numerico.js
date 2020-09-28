const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

console.log("Peso1 é inteiro: " + Number.isInteger(peso1));
console.log("Peso2 é inteiro: " + Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
console.log(total);
console.log("Total é inteiro: " + Number.isInteger(total));

const media = total/(peso1 + peso2);

// > toFixed() não altera o valor de 'média' pois esta é uma constante.
console.log(media.toFixed(2)); // fixa apenas as 2 primeiras casa decimais.

console.log(media.toString()); // > converter em string.

// > converte em Número binário.
console.log(media.toString(2));

console.log(typeof media);
console.log(typeof Number);
