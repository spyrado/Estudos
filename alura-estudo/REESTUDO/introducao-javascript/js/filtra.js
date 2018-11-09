var campoFiltro = document.querySelector("#filtra-tabela");

    campoFiltro.addEventListener("input", function(){
        var valorCampo = this.value;
        var pacientes = document.querySelectorAll(".paciente");

        if(valorCampo.length > 0){
            pacientes.forEach(function(paciente){
                var tdNome = paciente.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var regex = new RegExp(valorCampo, "i");
                if(!regex.test(nome)){
                    paciente.classList.add("inv");
                }else{
                    paciente.classList.remove("inv");
                }
            });
        }else{
            pacientes.forEach(function(paciente){
                paciente.classList.remove("inv");
            });
        }
        

    });