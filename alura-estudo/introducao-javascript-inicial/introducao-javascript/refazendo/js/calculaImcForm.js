function attImcTabela(){
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente){
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;
        var imc = calcImc(peso, altura);
        
        paciente.querySelector(".info-imc").textContent = imc;
    });
}

window.addEventListener("load", attImcTabela);

function calcImc(peso,altura){
    var imc = peso / ( altura * altura);
    
    return imc.toFixed(2);
}
