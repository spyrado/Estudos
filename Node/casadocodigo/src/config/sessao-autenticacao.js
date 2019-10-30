const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStategy = require('passport-local').Strategy;
const db = require('./database');
const UsuarioDao = require('../app/infra/usuario-dao')

module.exports = (app) => {

  // configuracao da sessao e da autenticacao
  passport.use(new LocalStategy(
    {
      usernameField: 'email',
      passwordField: 'senha'
    },
    (email, senha, done) => {
      const usuarioDao = new UsuarioDao(db);
      usuarioDao.buscaPorEmail(email)
        .then(usuario => {
          if (!usuario || senha != usuario.senha) {
            // 1 parametro passamos null, pois a consulta foi feita com sucesso e n deu erro algum
            // 2 parametro passamos false, pois ele não achou o usuário no banco.
            // 3 parametro passamos uma mensagem para recuperarmos ela caso precise em algum momento.
            return done(null, false, {
              message: 'Login e senha incorretos!'
            })
          } else {
            return done(null,usuario);
          }
        })
        .catch(erro => done(erro, false));
    }
  ))
}