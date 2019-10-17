const app = require('./src/config/custom-express');

//Criando o servidor
app.listen(3000, (req,res) => {
  console.log('Servidor rodando na porta 3000');
});