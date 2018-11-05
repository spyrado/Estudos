var btnIncluir = document.querySelector("#btn-incluir");

btnIncluir.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#negociation-form");
    var dados = recebeDados(form);
    
    var tr = criaTR(dados);
    
    var tabela = document.querySelector("#negociation-table");
    
    tabela.appendChild(tr);

    form.reset();
    
});

function criaTR(dados){
    
    var tr = document.createElement("tr");
    
    tr.appendChild(criaTD(dados.data));
    tr.appendChild(criaTD(dados.quantidade));
    tr.appendChild(criaTD(dados.valor));
    tr.appendChild(criaTD(dados.quantidade * dados.valor));
    
    return tr;
}

function criaTD(dado){
    
    var td = document.createElement("td");
    td.textContent = dado;
    
    return td;
}

function recebeDados(form){
    
    var dados = {
        data: form.data.value,
        quantidade: form.quantidade.value,
        valor: form.valor.value
    };
    
    return dados;
}