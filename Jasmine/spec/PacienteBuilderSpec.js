function PacienteBuilder(){
  
  var nome = 'Nicolas';
  var idade = 24;
  var peso = 62;
  var altura = 1.70;

  var clazz = {
    constroi(){
        return Paciente(nome,idade,peso,altura);
    },
    comIdade(valor){
      idade = valor;
      return this;
    },
    comPeso(valor){
      peso = valor;
      return this;
    }
  }

  return clazz;
}