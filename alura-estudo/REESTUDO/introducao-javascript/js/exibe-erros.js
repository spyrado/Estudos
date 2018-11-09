function msgErroTd(tdPeso, tdAltura,peso,altura){
    
    if(!verificaPeso(peso))
        tdPeso.textContent = "Peso Inválido!";
    if(!verificaAltura(altura)){
        tdAltura.textContent = "Altura Inválida!";
    }
        
}