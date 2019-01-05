const path = require('path'); // modulo node.js

module.exports = {
    entry: './app-src/app.js', // indica o primeiro modulo q vai rodar na aplicação
    outPut: { // onde vai ser gravado o bundle inicial, para que ele comece a procurar todas as dependencias.
        filename: 'bundle.js', // nome do bundle, q nesse caso está como bundle.js
        path: path.resolve(__dirname, 'dist') // esse path.resolve(__dirname) vai criar o caminho absoluto, até a pasta dist
    } 
}