//Configurando o Marko para ser utilizado junto ao express
require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Toda requisicao que for feita para /estatico, ele irá procurar no caminho passado: src/app/public
app.use('/estatico', express.static('src/app/public'));

//Configurando para devolver o middleware que desejamos.
app.use(bodyParser.urlencoded({
  extended: true
}));

const rotas = require('../rotas/rotas.js');
rotas(app);

module.exports = app;
