$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);
var erro = $("#erro");


function fraseAleatoria(){
    var spinner = $("#spinner");
    spinner.toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        erroRequisicao(erro);
    })
    .always(function(){
        spinner.toggle();
    });
}
function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numAleatorio].texto);
    atualizaTempoInicial(data[numAleatorio].tempo);
    atualizaTamanhoFrase();
}
function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId};
    console.log("id escolhido foi:" +fraseId);
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        erroRequisicao(erro);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}
function trocaFrase(data){
    $(".frase").text(data.texto);
    atualizaTempoInicial(data.tempo);
    atualizaTamanhoFrase();
}
function erroRequisicao(erro){
    erro.slideDown();
        setTimeout(function(){
            erro.slideUp();
        },5000);
}