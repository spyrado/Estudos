module.exports = (app) => {

  // Ouvindo requisições da raiz e retornando uma resposta
  app.get('/', function(req,res){
    // Enviando a resposta para o cliente
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
  // Ouvindo requisições do livros e retornando uma resposta
  app.get('/livros', function(req,res){
    // Enviando a resposta para o cliente
    res.send(`
      <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <h1> Listagem de livros </h1>
          </body> 
      </html>
    `);
  });
}