// par nome/valor
const saudacao = "Opa"; // -> contexto léxico 1

function exec() {
    const saudacao = "Falaaa"; // -> contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "Ricardo",
    idade: 15,
    peso: 80,
    endereco: {
        logradouro: "Rua do teste",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);