class Tabelas {

  init(conexao) {
    // conexao.query('CREATE TABLE agenda-petshop')
    console.log('Tabelas foram criadas');
    this.conexao = conexao;
    this.criaAtendimentos();
  }

  criaAtendimentos() {
    const sql = `CREATE TABLE if not exists Atendimentos (
      id int NOT NULL AUTO_INCREMENT,
      cliente VARCHAR(50) NOT NULL,
      pet VARCHAR(20),
      servico VARCHAR(20) NOT NULL,
      status VARCHAR(20) NOT NULL,
      observacoes text,
      PRIMARY KEY(id)
    )`;

    this.conexao.query(sql, (erro, resultado) => {
        if (erro) { console.log(erro); }
        else {
          console.log('Tabela de Atendimentos criada com sucesso');
        }
    });
  }
}

module.exports = new Tabelas;