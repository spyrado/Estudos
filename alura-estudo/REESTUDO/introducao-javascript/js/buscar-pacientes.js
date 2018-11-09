var buscaPacientes = document.querySelector("#buscar-paciente");
var contador = 0;
buscaPacientes.addEventListener("click", function(){
    var erroAjax = document.querySelector("#erro-ajax");
    erroAjax.classList.add("inv")
    var xhr = new XMLHttpRequest(); // cria o objeto de requisição.
    
    //Preparando a requisição, "abrindo ela".
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    /* Adicionado evento, para "escutar" quando a página requisitada(https://api-pacientes...), for carregada(evento de load)e
    e um parametro para receber os dados(responseText) em forma de texto(Text)*/
    xhr.addEventListener("load", function(){       
        
        if(contador > 0){
            var tabela = document.querySelector("#tabela-pacientes");
            var pacientesAjax = document.querySelectorAll(".paciente");
            var tabelaOriginal = pacientesAjax.length - contador;
            for(var i = (pacientesAjax.length - 1); i > (tabelaOriginal-1); i--){
                tabela.removeChild(pacientesAjax[i]);
            }
            contador = 0;
        }
        var resultadoBusca = xhr.responseText; // pega o resultado em forma de texto
        
        if(xhr.status == 200){
            // traduz o texto para JSON, Para que o javascript possa entender como um objeto.
            var pacientes = JSON.parse(resultadoBusca);

            //adiciona os pacientes da api na tabela.
            pacientes.forEach(function(paciente){
               adicionaPacienteNaTabela(paciente);
                contador += 1;
            });
            
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("inv");
            
        }

    });
    
    //envia a requisição.
    xhr.send();
    
});