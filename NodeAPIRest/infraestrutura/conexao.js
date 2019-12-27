const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  password: 'password',
  user:'root',
  database: 'agenda-petshop'
});

module.exports = conexao;