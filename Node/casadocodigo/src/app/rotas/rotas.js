const LivroDao = require('../infra/livro-dao')
const db = require('../../config/dababase')

module.exports = (app) => {
  
  // Criando as rotas
  app.get('/', (req, res) => {

    res.send(`
      <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
              <h1> Casa do Código </h1>
          </body> 
      </html>
    `)
  });

  app.get('/livros', (req, res) => {

    const livroDao = new LivroDao(db);
    livroDao.listaLivros((erro, resultados) => {
      res.marko(
        require('../views/livros/lista/lista.marko'),
        {
          livros: resultados
        }
      )
    });
  });

}