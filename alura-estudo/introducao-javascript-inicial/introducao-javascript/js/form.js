var btnAdd = document.querySelector("#adicionar-paciente");

    btnAdd.addEventListener("click", function(event){
        event.preventDefault();
        
        var form = document.querySelector("#form-adiciona");
        // Extraindo informações do paciente.
        var paciente = obtemPacienteDoFormulario(form);
        
        var erros = validaPaciente(paciente);
        
        if(erros.length > 0){
            exibeMsgErro(erros);
            return;
        }
        
        adicionaPacienteNaTabela(paciente);

        form.reset();
        var msgErroUl = document.querySelector(".msg-erro-ul");
        msgErroUl.innerHTML = "";
        
    });

function adicionaPacienteNaTabela(paciente){
     // Criando e adicionando o paciente em uma tr/td
        var pacienteTr = montaTr(paciente);
    
        var tabela = document.querySelector("#tabela-pacientes");
        //Adicionando paciante a tabela.
        tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd("info-nome", paciente.nome));
    pacienteTr.appendChild(montaTd("info-peso", paciente.peso));
    pacienteTr.appendChild(montaTd("info-altura", paciente.altura));
    pacienteTr.appendChild(montaTd("info-gordura", paciente.gordura));
    pacienteTr.appendChild(montaTd("info-imc", paciente.imc));

    return pacienteTr;
}

function montaTd(classe, dado){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){

    var erros = [];
    
    if(!validaPeso(paciente.peso)) erros.push("Peso Inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura Inválido");
    if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco.");
    if(paciente.gordura.length == 0) erros.push("Gordura não pode ser em branco.");
    if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco.");
    if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco.");
    
    return erros;
    

    
}

function exibeMsgErro(erros){
     var ul = document.querySelector(".msg-erro-ul");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("msg-erro");
        ul.appendChild(li);
    });
}