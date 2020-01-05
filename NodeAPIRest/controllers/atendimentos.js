const Atendimento = require('../models/atendimentos');

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista(res);
  });
  app.get('/atendimentos/:id', (req, res) => {
    console.log(req.params.id);
    Atendimento.buscaPorId(parseInt(req.params.id), res);
  });
  app.post('/atendimentos', (req, res) => {

    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
  });
  app.patch('/atendimentos/:id', (req, res) => {
    const valores = req.body;
    Atendimento.atualiza(parseInt(req.params.id), valores, res);
  })
  app.delete('/atendimentos/:id', (req, res) => {
    Atendimento.deleta(parseInt(req.params.id), res);
  })
}