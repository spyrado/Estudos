class NegociacaoController{

    constructor(){
        
        let $ = document.querySelector.bind(document);
        
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($("#listaNegociacoes")),
            "adiciona","esvazia"
        );
        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($("#mensagemView")),
            "texto"
        );

    }
    
    adiciona(event){
        
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());        
        this._mensagem.texto = "Negociação adicionada com sucesso.";
        this._limpaFormulario();     
    }
    
    apaga(){
        
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociação apagada com sucesso!";
    }
    
    importaNegociacoes(){
        
        let xhr = new XMLHttpRequest(),
            method = "GET",
            url = "negociacoes/semana";
        
        /* Configurações */
        xhr.open(method, url);
        
        xhr.onreadystatechange = () => {
            
            if(xhr.readyState == 4){
                
                if(xhr.status == 200){
                    JSON.parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data),obj.quantidade,obj.valor))
                        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociacoes obtidas com sucesso.';
                }else{
                    this._mensagem.texto = 'Não foi possível obter as negociações do servidor.';
                }
            }
        };
        
        /* Executa */
        xhr.send();
    }
    
    _criaNegociacao(){
        
        return new Negociacao(
            DateHelper.textoParaData(this.inputData.value),
            this.inputQuantidade.value,
            this.inputValor.value
        );
    }
    
    _limpaFormulario(){
        
        this.inputData.value = "";
        this.inputQuantidade.value = 1;
        this.inputValor.value = 0.0;
        
        this.inputData.focus();
    }
}