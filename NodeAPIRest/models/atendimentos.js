const moment = require('moment');

const conexao = require('../infraestrutura/conexao');

class Atendimentos {

  adiciona(atendimento, res) {
    const dataCriacao = moment(new Date()).format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);

    const clienteEhValido = atendimento. cliente.length >= 5;

    const validacoes = [
      {
        nome: 'data',
        valido: dataEhValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
        nome: 'cliente',
        valido: clienteEhValido,
        mensagem: 'Cliente deve ter pelo menos cinco caracteres'
      }
    ];

    const erros = validacoes.filter(campo => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const atendimentoDatado = { ...atendimento, dataCriacao, data};
      const sql = `INSERT INTO Atendimentos SET ?`;
  
      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
          if (erro) { res.status(400).json(erro); }
          else {
            res.status(201).json(resultados);
          }
      });
    }

  }

  lista(res) {
    const sql = 'SELECT * FROM Atendimentos';
    conexao.query(sql, (erro, resultados) => {
      if (erro) { res.status(400).json(erro); }
      else {
        res.status(200).json(resultados);
      }
    })
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos where id = ${id}`;
    const error = { 
      statusCode: 204,
      mensagem: 'Nada foi encontrado' 
    }
    conexao.query(sql, (erro, resultados) => {
      if (erro) { res.status(404).json(erro); }
      else {
        if (!resultados.length) { res.status(200).json(error); }
        else { res.status(200).json(resultados[0]); }
      }
    })
  }

  atualiza(id, valores, res) {
    const sql = `
      UPDATE Atendimentos 
      SET ?
      WHERE id = ${id}`;
  }
}

module.exports = new Atendimentos;