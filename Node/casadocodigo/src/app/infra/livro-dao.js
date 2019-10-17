class LivroDao {

  constructor(db){
    this._db = db;
  }

  listaLivros(cb) {
    this._db.all(
      'SELECT * FROM livros',
      (erro, resultados) => 
        cb(erro,resultados)
    )
  }
}

module.exports = LivroDao;