const express = require('express'); // Recebendo uma função do express
const app = express(); // Recebendo um objeto do express

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app; // exportando minha função em node