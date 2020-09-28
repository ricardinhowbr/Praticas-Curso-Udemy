const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// -> vai disponibilzar os arquivos estáticos
app.use(express.static('.'));

// -> Para todas as requisições, transoformar os dados em JSON.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
    upload(req, res, erro => {
        if(erro){
            return res.end('Ocorreu um erro!');
        }

        res.end('Concluído com sucesso!');
    });
});

// -> nesse caso precisa do 'body-parser'
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    });
});

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0;
    res.send({
        resultado: par ? 'par' : 'ímpar'
    });
});

app.listen(8080, () => console.log('Executando...'));
app.get('/teste', (req, res) => res.send(new Date));