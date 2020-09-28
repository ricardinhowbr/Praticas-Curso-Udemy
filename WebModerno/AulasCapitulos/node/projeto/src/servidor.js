const express = require('express');

const porta = 3003;

const app = express();
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

// app.get('/produtos', (req, res, next) => {
//     console.log("Middleware 1...");
//     next();
// }

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    });

    res.send(produto); // JSON
});

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    });

    res.send(produto); // JSON
});

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);

    res.send(produto); // JSON
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta: ${porta}`);
});