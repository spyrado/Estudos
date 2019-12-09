module.exports = app => {
  app.get('/atendimento', (req,res) => {
    res.send('Voce esta na rota de atendimentos e esta realizando um GET');
  });
}