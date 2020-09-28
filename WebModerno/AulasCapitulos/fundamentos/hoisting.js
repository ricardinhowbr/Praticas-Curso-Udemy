// -> Exemplo de hoisting.

console.log("a =", a); // -> a = undefined
var a = 2;
console.log("a =", a);


console.log("b =", b); // -> throw error
let b = 3;
console.log("b =", b);