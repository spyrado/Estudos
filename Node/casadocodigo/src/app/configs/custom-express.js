//Configurando o Marko para ser utilizado junto ao express
require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Configurando para devolver o middleware que desejamos.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req,res,next) => {
  console.log('1.1');
  next();
  console.log('1.2');
});

app.use((req,res,next) => {
  console.log('2.1');
  next();
  console.log('2.2');
});

app.use((req,res,next) => {
  console.log('3.1');
  next();
  console.log('3.2');
});

const rotas = require('../rotas/rotas.js');
rotas(app);

module.exports = app;
