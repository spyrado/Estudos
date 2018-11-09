var btnAdd = document.querySelector("#adicionar-paciente");

btnAdd.addEventListener("click", function(event){
    event.preventDefault();
    
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteFormulario(form);
    
    
    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        montaUl(erros);
        
        return;
    }
    
    adicionaPacienteNaTabela(paciente);
    
    var ulErro = document.querySelector("#msg-erro");
    ulErro.innerHTML = "";
    
    form.reset();
    
});

function obtemPacienteFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcIMC(form.peso.value, form.altura.value)
    };
    
    return paciente;
}

function adicionaPacienteNaTabela(paciente){
    
    var tabela = document.querySelector("#tabela-pacientes");
    var pacienteTR = montaTr(paciente);
    
    tabela.appendChild(pacienteTR);
}

function montaTr(paciente){
    
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    
    tr.appendChild(montaTd(paciente.nome,"info-nome"));
    tr.appendChild(montaTd(paciente.peso,"info-peso"));
    tr.appendChild(montaTd(paciente.altura,"info-altura"));
    tr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    tr.appendChild(montaTd(paciente.imc,"info-imc"));
    
    return tr;
    
}

function montaTd(dado, classe){
    
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    
    return td;
    
}

function validaPaciente(paciente){
    
    var erros = [];
    
    if(!verificaPeso(paciente.peso)) erros.push("Peso Inválido!");
    if(!verificaAltura(paciente.altura)) erros.push("Altura Inválida!");
    
    return erros;
}

function montaUl(erros){
    var ms = 100;
    var ulErro = document.querySelector("#msg-erro");
    ulErro.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.classList.add("msg-erro-li");
        li.textContent = erro;
        ulErro.appendChild(li);
        setTimeout(function(){
            li.classList.add("efeito");
        },ms);
        ms += ms;
    });
}