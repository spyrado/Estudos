/*Dando um novo nome ao titulo*/
var tittleName = document.querySelector(".titulo");
tittleName.textContent = "Aparecida Nutricionista";

/*Selecionando todos os clientes*/
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    /*Esse macete faz com que a cada loop, a variável paciente,
    receba um novo paciente*/
    var paciente = pacientes[i];
    
    /*Pegando todos os campos necessários*/
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    /*Validando as informações*/
    var validatePeso = validaPeso(peso);
    var validateAltura = validaAltura(altura);
    
    if(!validatePeso){
        tdPeso.textContent = "Peso inválido!";
        tdPeso.classList.add("peso-invalido");
        paciente.classList.add("paciente-error");
       }
    if(!validateAltura){
        tdAltura.textContent = "Altura Inválida!";
        tdAltura.classList.add("altura-invalida");
        paciente.classList.add("paciente-error");
       }
    /*Exibindo as informações caso Válidas.*/
    if(validatePeso && validateAltura){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
       }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000)
        return true;
    else
        return false;
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0)
        return true;
    else
        return false;
}

function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}