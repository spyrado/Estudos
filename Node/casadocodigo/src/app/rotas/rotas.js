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
    // fazendo o servidor pegar a resposta a partir do marko definido.
    res.marko(
      require('../views/livros/lista/lista.marko'),
      {
        livros: [
          { 
            id: 1,
            titulo: 'Fundamentos do Node'
          },
          { 
            id: 2,
            titulo: 'Node Avançado'
          }
        ]
      }
    );
  });
}