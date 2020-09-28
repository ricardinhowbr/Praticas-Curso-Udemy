class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falarNome = () => console.log(`Meu nome é ${this.nome}`);
}

const p1 = new Pessoa("Luffy");
p1.falarNome();


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Zoro");
p2.falar();