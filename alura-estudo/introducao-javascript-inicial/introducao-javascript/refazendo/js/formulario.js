var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){
    
    event.preventDefault();
    
    var f = document.querySelector("#form-adiciona");
    
    var pacientes = recebeDadosPaciente(f);    
    
});

//botaoAdd
function recebeDadosPaciente(f){
    var paciente = {
        nome: f.nome.value,
        peso: f.peso.value,
        altura: f.altura.value,
        gordura: f.gordura.value,
        imc: calcImc(f.peso.value, f.altura.value)
    }
        return paciente;
}
function montaTr(paciente){
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    
    tr.appendChild(montaTd(paciente.nome,"info.nome"));
    tr.appendChild(montaTd(paciente.peso,"info.peso"));
    tr.appendChild(montaTd(paciente.altura,"info.altura"));
    tr.appendChild(montaTd(paciente.gordura,"info.gordura"));
    tr.appendChild(montaTd(paciente.imc,"info.imc"));
    
    return tr;
}
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
 
    return td;
    
}