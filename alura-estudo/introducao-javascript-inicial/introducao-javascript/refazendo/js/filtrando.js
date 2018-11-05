var filtro = document.querySelector("#filtra-paciente");

filtro.addEventListener("input", function(){
    
    var pacientes = document.querySelectorAll(".paciente");
    var busca = this.value;
    
    pacientes.forEach(function(paciente){
        var nomePaciente = paciente.querySelector(".info-nome").textContent;
        var regex = new RegExp(busca, "i");
        
        if(!regex.test(nomePaciente)){
            paciente.style.display = "none";
        }else{
            paciente.style.display = "table-row";
        }
    });


});

