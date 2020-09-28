const pessoa = {
    saudadao: "Bom dia!",
    falar() {
        console.log(this.saudadao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas: Funcional e Orientado a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();