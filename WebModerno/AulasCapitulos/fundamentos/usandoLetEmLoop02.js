const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(() => {
        console.log(i);
    });
}

// -> Saída vai conter o valor de "i" no momento em que a funcao foi adicionada no array.
funcs[2]();
funcs[8](); 