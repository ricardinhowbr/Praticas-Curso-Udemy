// -> mecanismo de tratamento de erro.

function tratarErroELancar(erro){
    //throw new Error("Exemplo de erro");
    //throw 10;
    //throw true;
    //throw "mensagem";
    throw {
        nome: erro.name,
        msg: "Outro exemplo",
        data: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!");
    }
    catch(e){
        tratarErroELancar(e);
    }
    finally {
        console.log("final");
    }
}

const obj = { name: "Ricardo" };

imprimirNomeGritado(obj);