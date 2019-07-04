const app = require('./src/config/custom-express');

app.listen(3000, function(){ // Criando servidor
  console.log('Servidor rodando na porta 3000');
});

// Ouvindo requisições da raiz e retornando uma resposta
app.get('/', function(req,res){
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
// const servidor = http.createServer((req,res) => {

//   let html = '';

//   if(req.url == '/'){
//     html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1> Casa do Código </h1>
//             </body> 
//         </html>
//     `;
//   }else if(req.url == '/livros'){
//     html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1> Listagem de Livros </h1>
//             </body> 
//         </html>
//     `;
//   }
//   res.end(html);
// }); // crio um servidor
// servidor.listen(3000) // digo ao servidor para rodar na porta 3000