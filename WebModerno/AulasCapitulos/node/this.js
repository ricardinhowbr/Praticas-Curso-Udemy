console.log(this === global);
console.log(this === module);

console.log(this === exports);
console.log(this === module.exports);


function logThis() {
    console.log("Dentro de uma funcao");
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis();

const logThis2 = () => {
    console.log("Dentro de uma funcao 02");
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis2();