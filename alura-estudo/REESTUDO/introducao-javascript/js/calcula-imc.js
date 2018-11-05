var pacientes =  document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;  
    var tdImc = paciente.querySelector(".info-imc");
    
    msgErroTd(tdPeso, tdAltura, peso, altura); 
    
    if(verificaPeso(peso) && verificaAltura(altura)){
        tdImc.textContent = calcIMC(peso, altura);
    }else{
        tdImc.textContent = "ERROR";
        paciente.classList.add("atencao");
    }
        
    
});

function calcIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

