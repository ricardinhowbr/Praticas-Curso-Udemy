// lodash
// -> "npm i lodash" : para instalar o modulo como dependência.
const _ = require('lodash');

setInterval(() => console.log(_.random(50, 60)), 3000);

// Em seguida foi instalado em escopo global o "nodemon".
// -> npm i -g nodemon

// O "nodemon" é um módulo que executa o projeto em modo live server.
// espelhando a alteração do código.