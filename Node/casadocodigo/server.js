const app = require('./src/app/configs/custom-express.js');

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});