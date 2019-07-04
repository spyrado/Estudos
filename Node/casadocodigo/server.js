const app = require('./src/config/custom-express');

app.listen(3000, function(){ // Criando servidor
  console.log('Servidor rodando na porta 3000');
});