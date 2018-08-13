class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        let self = this;
        this._form = $("#formNegociacao")
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = ProxyFactory.create(new ListaNegociacoes(), ['adiciona','esvazia'], (model) => 
            this._negociacaoView.update(model));
        
        this._negociacaoView = new NegociacaoView($("#lista-negociacoes"));
        this._negociacaoView.update(this._listaNegociacoes);
        
        
        this._mensagem = ProxyFactory.create(
        new Mensagem(), 
        ['texto'], 
        model => this._mensagemView.update(model));
        
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }
    
    adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._limpaFormulario(this._form);
    }
    
    apaga(){
        
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociacao apagada com sucesso.";        
        this._limpaFormulario(this._form);
    }
    
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }
    
    _limpaFormulario(form){
        form.reset();
        this._inputData.focus();
    }
    
    
}