$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);


function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#usuarios").val();
    var numPalavras = $("#contador-palavras").text();
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".btn-remove").click(removeLinha);
    corpoTabela.prepend(linha);
    $(".placar").slideDown(400);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html, body").animate({
        scrollTop: posicaoPlacar+"px"
    }, 1000);
}

function novaLinha(usuario, numPalavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("btn-remove").attr("href","#");
    var icone = $("<i>").addClass("small material-icons").text("delete");
    
    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    
    return linha;
}

function removeLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(500);
    setTimeout(function(){
        linha.remove();
    },500);
}

function mostraPlacar(){
        var placar = $(".placar");
        placar.stop().slideToggle(1000);
        scrollPlacar();
}
function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody > tr");
    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();
        
        var score = {
            usuario: usuario,
            pontos: palavras
        };
        
        placar.push(score);
        
    });
    
    var dados = {
        placar: placar
    };
    
    $.post("http://localhost:3000/placar",dados,function(){
        console.log("Salvou no servidor");
        $(".tooltip").tooltipster('open').tooltipster('content','Sincronizado com sucesso.');
    }).fail(function(){
        $(".tooltip").tooltipster('open').tooltipster('content','Sincronização falhou.');
    }).always(function(){
        setTimeout(function(){
             $(".tooltip").tooltipster('close');
        },1200);
    });
    
}

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);
            linha.find(".btn-remove").click(removeLinha);
            $("tbody").append(linha);
            
        });
    });
}