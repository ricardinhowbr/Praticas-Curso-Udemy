function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio; // inicio = 22 e fim  = 3
        fim = inicio - fim; // fim = 19 e inicio = 22
        inicio = inicio - fim; // incio = 3 e fim = 19;
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

imprimirImpares(19, 3);
