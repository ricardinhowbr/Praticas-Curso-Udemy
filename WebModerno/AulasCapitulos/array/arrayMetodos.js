const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // Remove o último elemento do array
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton");
console.log(pilotos);

// splice pode adicionar e remover elementos
// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//Remover
pilotos.splice(3, 1) 
console.log(pilotos);

//Slice retorno um novo array
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);
