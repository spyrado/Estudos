const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStategy = require('passport-local').Strategy;
const db = require('./database');
const UsuarioDao = require('../app/infra/usuario-dao');

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
  ));

  //
  passport.serializeUser((usuario, done) => {
    // Passo apenas as informacoes que quero armazenar em sessao.
    const usuarioSessao = {
      nome: usuario.nome_completo,
      email: usuario.email
    };

    done(null, usuarioSessao);
  });

  passport.deserializeUser((usuarioSessao, done) => {
    done(null, usuarioSessao);
  });

  //nossa sessao é um middleware, por isso inserimos dentro de app.use
  app.use(sessao({
    secret: 'node alura', // serve para assinar/identificar a nossa secao
    genid: function(req) { // o papel dela, é retornar um identificar aleatorio qualquer. o uuid faz isso para nos
      return uuid();
    },
    resave: false, // dizendo que nao quero resalvar as sessoes mesmo q n tenha alteracoes nelas.
    // nao quero que a aplicacao gere uma sessao, para todo mundo que acessar a home.
    // apenas quando a efetivacao do login for feita com sucesso.
    saveUninitialized: false
  }));

  // Terminando todas as configuracoes acima, temos que pedir para o passport ser iniciado, e iniciar
  // a sessao tambem
  app.use(passport.initialize());
  app.use(passport.session());
}