require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const templates = require('../app/views/templates')

// estou falando para o express que toda requisicao feita para /estatico, irá ter como pasta raiz
// a pasta public.
app.use('/estatico', express.static('src/app/public'));

// A partir de agora todas as requisicoes feitas, vao vir com o conteudo do body (por padrao o node retorna undefined)
app.use(bodyParser.urlencoded({
    extended: true
}));

//Sobrescrita de metodos HTTP, la no template voce define o metodo que deve ser ativo, em determinada condicao
// e envia no body a resposta, esse cara vai identificar o metodo, alterar o metodo padrao e enviar para
// o endipoint requisitado.
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

const sessaoAutenticacao = require('../config/sessao-autenticacao');
sessaoAutenticacao(app);

//Configuracao de rotas da aplicacao
const rotas = require('../app/rotas/rotas');
rotas(app);
app.use((req,res,next) => {
    res.status(404).marko(
      templates.base.erro404
    );
});
// Colocamos erro na frente mesmo nao usando, pois é somente dessa forma
// que o express vai saber diferenciar um erro comum para esse middleware especial que é declarado os
// 4 parametros
app.use((erro,req,res,next) => {
  res.status(500).marko(
    templates.base.erro500
  );
});
module.exports = app;