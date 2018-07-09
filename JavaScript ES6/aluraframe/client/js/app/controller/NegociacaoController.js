class NegociacaoController{

    constructor(){
        
        let $ = document.querySelector.bind(document);
        
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
        
        let self = this;
        
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            
            get(target,prop,receiver){
                
                if(["adiciona", "esvazia"].includes(prop) && typeof target[prop] == "function"){
                    
                    return function(){
                        
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);
                    }
                }
                
               return Reflect.get(target,prop,receiver);
            }
        });
        
        console.log(this._listaNegociacoes.adiciona);
        
        this._negociacoesView = new NegociacoesView($("#listaNegociacoes"));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);

    }
    
    adiciona(event){
        
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());        
        this._mensagem.texto = "Negociação adicionada com sucesso.";
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();     
    }
    
    apaga(){
        
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociação apagada com sucesso!";
        this._mensagemView.update(this._mensagem);
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