Number.prototype.range = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado = nota => {
    if(nota.range(9, 10)){
        console.log("Quadro de honra");
    }
    else if(nota.range(7, 8.99)){
        console.log("Aprovado!");
    }
    else if (nota.range(4, 6.99)){
        console.log("Recuperação");
    }
    else if(nota.range(0, 3.99)){
        console.log("Reprovado");
    }
    else {
        console.log("Nota inválida");
    }
}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2);
imprimirResultado(-1);
imprimirResultado(11);