const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware para tratar JSON e dados de formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do mecanismo de visualização
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/pages'));

// Servir arquivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    if (req.query.busca == null) {
        res.render('home', {});
    } else {
        res.send('Você buscou: ' + req.query.busca);
    }
});

// Rota de notícias
app.get('/noticias', (req, res) => {
    res.render('noticias', {});
});
// Rota de esportes
app.get('/esportes', (req, res) => {
    res.render('esportes', {});
});

// Rota de entretenimento
app.get('/entretenimento', (req, res) => {
    res.render('entretenimento', {});
});
// Rota de contato
app.get('/contato', (req, res) => {
    res.render('contato', {});
});

// Rota dinâmica
app.get('/:slug', (req, res) => {
    res.send(req.params.slug);
});

// servidor
app.listen(5000, () => {
    console.log('Server rodando em http://localhost:5000');
});