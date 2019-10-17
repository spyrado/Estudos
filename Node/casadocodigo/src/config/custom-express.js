require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);
/*
Como todo arquivo.js é um módulo, para exportar algo em node, devemos usar a sintax abaixo.
app estará disponível para todos que fizerem o require de custom-express
*/
module.exports = app;