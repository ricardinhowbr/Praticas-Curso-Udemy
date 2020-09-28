const gerarNumerosEntre = (min, max, numerosProibidos) => {
    if(min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        
        if(numerosProibidos.includes(aleatorio)) {
            reject("Numero repetido")
        }
        else {
            resolve(aleatorio);
        }
    });
}

// function async retorna uma promise
async function gerarMegaSena(qtd, tentativas = 1) {
    try {
        const numeros = [];

        for(let _ of Array(qtd).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros));
        }
    
        return numeros; // resolve a promise
    }
    catch(e) {
        if(tentativas > 10)
            throw "Não deu certo!" // reject a promise
        else
            gerarMegaSena(qtd, tentativas + 1)
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)