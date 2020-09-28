// Implementação de Reduce(simplificado).
Array.prototype.reduce2 = function(callback, valorInicial) {
    const index = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0];

    for(let i = index; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }

    return acumulador;
}

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];

console.log(nums.reduce(soma, 21));