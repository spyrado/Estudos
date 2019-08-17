//Configurando o Marko para ser utilizado junto ao express
require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const rotas = require('../rotas/rotas.js');
rotas(app);

module.exports = app;
