// Promise é assíncrono.

let p = new Promise(function (cumprirPromesa) {
    cumprirPromesa(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(console.log);

 