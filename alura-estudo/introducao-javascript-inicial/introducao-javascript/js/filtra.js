var campoFiltro = document.querySelector("#filtra-paciente");

campoFiltro.addEventListener("input", function(){
    //recebendo o valor do campo
    var busca = this.value;
    
    //Selecionando toda a tabela de pacientes
    var pacientes = document.querySelectorAll(".paciente");
    
    //Verificando se tem algo na busca
    if(busca.length > 0){
        //percorrendo a tabela de pacientes
        pacientes.forEach(function(paciente){
        var nomeTd = paciente.querySelector(".info-nome");
        var nomePaciente = nomeTd.textContent;
        //var expressao = new RegExp(busca, "i");
            //se a busca não tiver algum dado que bate com a expressao,
            //remove o paciente
        //if(!expressao.test(nomePaciente)){
        var resultado = nomePaciente.substr(0, busca.length);
        var comparavelMinusculo = resultado.toLowerCase();
        var valorDigitadoMinusculo = busca.toLowerCase();
        if(!(valorDigitadoMinusculo == comparavelMinusculo)){
            paciente.classList.add("invisivel");
        }else{
            //faz o paciente aparecer, caso ele esteja na busca.
            paciente.classList.remove("invisivel");
        }
    });
        //Caso não tenha, faça aparecer os pacientes
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }
});

