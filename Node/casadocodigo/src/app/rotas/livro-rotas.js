const BaseControlador = require('../controladores/base-controlador');
const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();

const Livro = require('../modelos/livro');

module.exports = (app) => {

	const rotasLivro = LivroControlador.rotas();

	app.use(rotasLivro.autenticadas, (req, resp, next) => {
		if (req.isAuthenticated()) {
			next()
		} else {
			resp.redirect(BaseControlador.rotas().login)
		}
	});

	app.get(rotasLivro.lista, livroControlador.lista());

	app.route(rotasLivro.cadastro)
		.get(livroControlador.formularioCadastro())
		.post(Livro.validacoes(), livroControlador.cadastra())
		.put(livroControlador.edita());

	app.delete(rotasLivro.delecao, livroControlador.remove());

	app.get(rotasLivro.edicao, livroControlador.formularioEdicao());

};