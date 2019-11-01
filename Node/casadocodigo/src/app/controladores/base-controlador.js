const templates = require('../views/templates');
const LivroControlador = require('./livro-controlador');

class BaseControlador {

	static rotas() {
		return {
			home: '/',
			login: '/login'
		}
	}

	home() {
		return function (req, resp) {
			resp.marko(
				templates.base.home
			);
		};
	}

	login() {
		return (req, resp) => {
			resp.marko(
				templates.base.login
			);
		}
	}

	efetuaLogin() {
		return (req, resp, next) => {
			const passport = req.passport;
			// Do something
			// como meu tipo de estrategia é local, eu apenas passo local como string
			// como segundo parametro passamos um callback, que sera executado ao fim da estrategia, que criamos.
			// la nas configuracoes da sessao-autenticacao.
			//IMPORTANTE Ao executar o metodo authenticate, ele adiciona na requisicao um metodo chamado login.
			// que chamamos mais a frente
			passport.authenticate('local',(erro, usuario, info) => {
				if (info) {
					return resp.marko(templates.base.login)
				}

				if (erro) {
					return next(erro);
				}
				// Adicionando o usuario na sessao
				// esse metodo o authenticate que adicionou na requisicao
				req.login(usuario, (erro) => {
					if (erro) {
						return next(erro);
					}
					return resp.redirect(LivroControlador.rotas().lista);
				});
			})(req, resp,next);
		}
	}
}

module.exports = BaseControlador;