
var btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", function(event){
    
    event.preventDefault();
    
    var form = document.querySelector("#form-log");
    
    var valorLog = obtemLogDoFormulario(form);
    
    var invalido = document.querySelector(".invalido");
    if(valorLog.length <= 0){
        invalido.textContent = "Insira um valor";
    }else{
        invalido.textContent = "";
        adicionaLogNaLista(valorLog);
    }
    
    
    

});

function adicionaLogNaLista(valorLog){
    var ul = document.querySelector(".lista-de-logs");
    
    ul.appendChild(montaLi(valorLog));
}

function montaLi(valorLog){
    var li = document.createElement("li");
    li.textContent = valorLog;
    
    return li;
}
function obtemLogDoFormulario(form){
    var log = form.log.value;
    
    return log;
}

