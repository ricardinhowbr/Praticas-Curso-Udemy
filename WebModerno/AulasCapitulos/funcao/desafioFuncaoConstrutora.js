function Pessoa(nome) {
    this.nome = nome;
    this.falarNome = () => console.log(`Meu nome é ${this.nome}`);
}

const p1 = new Pessoa("Luffy");
p1.falarNome();