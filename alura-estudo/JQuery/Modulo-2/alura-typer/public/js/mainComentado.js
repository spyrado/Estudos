//Pegando o conteudo do texto do parágrafo <p class="frase">
var frase = $(".frase").text();
/*Dando um split na frase pelo espaço, fazendo com que
armazene em um vetor todas as palavras, adicionando um
.length para pegar o tamanho do vetor, e consequentemente 
saber quantas palavras estão armazenadas nele.*/
var numPalavras = frase.split(" ").length;
//Adicionando o numero de palavras no span <span id="tamanho-frase">0</span>
var tamanhoFrase = $("#tamanho-frase").text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function(){
    
    //valor do campo textarea
    var valorCampo = $(this).val();
    
    //tamanho do valor do campo textarea
    var qtdCaracteres = valorCampo.length;
    
    /*pego o valor do campo textarea transformo em vetor a cada espaço, e pego
    o tamanho do vetor*/
    var qtdPalavras = valorCampo.split(/\s+/).length -1;
    
    //Atribuo ao meu span a quantidade de caracteres
    $("#contador-caracteres").text(qtdCaracteres);
    
    /*seleciono o span que conta palavras, e atribuo a quantidade de palavras a ele*/
    var spanPalavras = $("#contador-palavras").text(qtdPalavras);
    
});










var frase = $(".frase").text();

var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase").text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function(){
    
    var valorCampo = $(this).val();
    
    var qtdPalavras = valorCampo.split(/\s+/).length;
    $("#contador-palavras").text(qtdPalavras);
    
    var qtdCaracteres = valorCampo.length;
    $("#contador-caracteres").text(qtdCaracteres);

    
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){
       var id =  setInterval(function(){
                    tempoRestante--;
           console.log(tempoRestante);
                    $("#tempo-digitacao").text(tempoRestante);
                        if(tempoRestante < 1){
                            campo.attr("disabled", true);
                            clearInterval(id);   
                        }
                }, 1000);
});