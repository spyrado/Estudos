const LivroDao = require('../infra/livro-dao');
const db = require('../configs/database');

module.exports = (app) => {
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
    `);
  });
  
  app.get('/livros', (req, res) => {
    console.log('Listagem de Livros');
    const livroDao = new LivroDao(db);

    livroDao.lista()
      .then(livros => {
        // fazendo o servidor pegar a resposta a partir do marko definido.
        res.marko(
          require('../views/livros/lista/lista.marko'),{livros}
        ); 
      })
      .catch(error => console.error(error));
  });

  app.get('/livros/form', (req, res) => {
    res.marko(
      require('../views/livros/form/form.marko')
    ); 
  });

  app.post('/livros', (req, res) => {
    console.log(req.body);
    const livroDao = new LivroDao(db);

    livroDao.adiciona(req.body)
      .then(res.redirect('/livros'))
      .catch(error => console.error(error));
  });

  app.delete('/livros/:id', (req,res) => {
    const ID = req.params.id;
    const livroDao = new LivroDao(db);
    livroDao.remove()
  });
}