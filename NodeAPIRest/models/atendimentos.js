const conexao = require('../infraestrutura/conexao');

class Atendimentos {

  adiciona(atendimento) {
    const sql = `INSERT INTO Atendimentos SET ?`;

    conexao.query(sql, (erro, resultado) => {
        if (erro) {

        } else {
          console.log('Atendimento adicionado com sucesso!.');
        }
    });
  }
}