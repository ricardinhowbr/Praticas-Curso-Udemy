console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Yup";
//obj1['nome'] = "Yup2";

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
    this.exec = () => {
        console.log("Funcao exec...");
    }
}

const obj2 = new Obj("função de teste");
const obj3 = new Obj("hahaha");

console.log(obj2.nome);
console.log(obj3.nome);

obj3.exec();