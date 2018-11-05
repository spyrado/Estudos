var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function(){
    // cria um request para a api
    var xhr = new XMLHttpRequest();
    
    //metodo de request será get, e a url sera tal.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    // Envia nosso request ao servidor.
    xhr.send();
    
    xhr.addEventListener("load", function(){
        
        var erroAjax = document.querySelector("#erro-ajax");
        
        if(xhr.status == 200){
            
            erroAjax.classList.add("invisivel");
            //tras a resposta do texto que foi requisitado ao servidor.
            var resposta = xhr.responseText;
            //Com o JSON eu converto a string em objeto JavaScript.
            var objPacientes = JSON.parse(resposta);

            objPacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    

    
    
    
});