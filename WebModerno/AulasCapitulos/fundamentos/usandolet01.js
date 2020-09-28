var numero = 1 // tem escopo global e de função
{
    let numero = 2 // -> tem escopo de bloco.
    console.log("dentro = ", numero);
}
console.log("fora = ", numero);