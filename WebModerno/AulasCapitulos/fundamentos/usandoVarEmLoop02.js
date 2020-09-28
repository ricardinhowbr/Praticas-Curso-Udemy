const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(() => {
        console.log(i);
    });
}

funcs[2](); // -> saida = 10
funcs[8](); // -> saída = 10