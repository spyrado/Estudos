const http = require('http'); // importo o modulo http

const servidor = http.createServer((req,res) => {

  let html = '';

  if(req.url == '/'){
    html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `;
  }else if(req.url == '/livros'){
    html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body> 
        </html>
    `;
  }
  res.end(html);
}); // crio um servidor
servidor.listen(3000) // digo ao servidor para rodar na porta 3000