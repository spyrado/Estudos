var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    iniciaContadores();
    iniciaCronometro();
    iniciaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
    $('#usuarios').selectize({
        create: true,
        sortField: 'text'
    });
    $('.tooltip').tooltipster({
        trigger: 'custom'
    });
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var tamanhoFrase = frase.split(" ").length;
    $("#tamanho-frase").text(tamanhoFrase);
}

function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo); 
}

function iniciaContadores(){
    campo.on("input", function(){
        var campo = $(this).val();

        var qtdCaracteres = campo.length;
        $("#contador-caracteres").text(qtdCaracteres);

        var qtdPalavras = campo.split(/\s+/).length;
        $("#contador-palavras").text(qtdPalavras);
    
    });
}

function iniciaCronometro(){
        campo.one("focus", function(){
            var tempoDigitacao = $("#tempo-digitacao").text();
            $("#botao-reiniciar").attr("disabled", true);
            var id = setInterval(function(){
               tempoDigitacao--;
                $("#tempo-digitacao").text(tempoDigitacao);

                if(tempoDigitacao < 1){
                    clearInterval(id);  
                    finalizaJogo();
                }
            }, 1000);
        });
}

function finalizaJogo(){
    campo.attr("disabled", true);
    $("#botao-reiniciar").attr("disabled", false);
    campo.addClass("campo-desativado");
    inserePlacar();
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    campo.removeClass("campo-desativado");
    campo.removeClass("border-red border-green");
    iniciaCronometro();
}


function iniciaMarcadores(){
    campo.on("input", function(){
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
        if(digitado.length <= 0){
            campo.removeClass("border-green border-red");
        }else if(digitado == comparavel){
            campo.removeClass("border-red");
            campo.addClass("border-green");
        }else{
            campo.removeClass("border-green");
            campo.addClass("border-red");
        }
        
        /*
            Podemos fazer dessa maneira também:
            
        if(digitado.length <= 0){
            campo.removeClass("border-green border-red");
        }else{
            var ehCorreto = (digitado == comparavel);
            campo.toggleClass("border-green", ehCorreto);
            campo.toggleClass("border-red", !ehCorreto);
        }
            
        */
    });
}




    




