const express = require('express');
const app = express();

const rotas = require('../rotas/rotas.js');
rotas(app);

module.exports = app;
