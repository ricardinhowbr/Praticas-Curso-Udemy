function soBoaNoticia(nota) {
    if(nota >= 7) {
         console.log("Aprovado com " + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([4, 3]);
seForVerdadeEuFalo({});