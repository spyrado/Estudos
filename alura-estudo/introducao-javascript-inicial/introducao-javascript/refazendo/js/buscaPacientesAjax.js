var buscaAjax = document.querySelector("#buscar-pacientes");

controle = true; // variável de controle.

buscaAjax.addEventListener("click", function(){
    
    // cria uma nova requisição HTML/XML
    var xhr = new XMLHttpRequest();
    
    //abre a conexão, para fazer a requisição.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    //Envia a requisição.
    xhr.send();
    
    //Fica escutando se a resposta já foi carregada "load"
    xhr.addEventListener("load", function(){
        
       
        if(controle){
        controle = false;
        //Pega a resposta do texto em string
        var resposta = xhr.responseText;
        //transforma o string em um obj JavaScript
        var objPaciente = JSON.parse(resposta);
        
        var tabela = document.querySelector("#tabela-pacientes");
        
        objPaciente.forEach(function(paciente){
            var tr = montaTr(paciente);
            tabela.appendChild(tr);
        });
            }else{
                return null;
            }
    });
});

/*
    var nome = paciente.querySelector(".info-nome").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var gordura = paciente.querySelector(".info-gordura").textContent;
    var imc = paciente.querySelector(".info-imc").textContent;
*/