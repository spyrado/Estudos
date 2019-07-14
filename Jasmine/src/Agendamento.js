function Agendamento(){
    
  var data;

  var clazz = {
    para(consulta){

      var umDiaEmMilisegundo = 1000 * 60 * 60 * 24;
      var vinteDiasEmMillisegundos = umDiaEmMilisegundo * 20;

      var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);

      while(novaData.getDay() == 0 || novaData.getDay() == 6){
        novaData = new Date(novaData.getTime() + umDiaEmMilisegundo);
      }

      var novaConsulta = new Consulta(
        consulta.getNome(),
        consulta.getProcedimentos(),
        consulta.isParticular(),
        consulta.isRetorno(), 
        novaData
      );

      return novaConsulta;
    }
  }

  return clazz;
}