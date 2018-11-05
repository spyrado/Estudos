class NegociacoesController{

    constructor(){

        let $ = document.querySelector.bind(document);
        let self = this;
        // Negociacoes.js
        this._data = $("#data");
        this._quantidade = $("#quantidade");
        this._valor = $("#valor");
        
        // ListaNegociacoes.js
        this._listaNegociacoes = new ListaNegociacoes(function(model){
            this._negociacoesView.update(model)
        });
        
        // NegociacoesView.js
        this._negociacoesView = new NegociacoesView($('#listaNegociacoes'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    
    adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.inclui(this._criaNegociacao());
  
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
    }
    
    apaga(){

        this._listaNegociacoes.esvazia();
        
        this._mensagem.texto = 'Negociação apagada com sucesso';
        this._mensagemView.update(this._mensagem);
    }
    
    _criaNegociacao(){
        return new Negociacoes(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }
    
}

