const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
conexao.connect((erro, resp) => {
  if (erro) { 
    console.log(erro); 
  } else {
    console.log('Conectado com sucesso no banco');
    const app = customExpress();
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  }
});