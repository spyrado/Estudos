class NegociacaoController{

    constructor(){
        
        let $ = document.querySelector.bind(document);
        
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }
    
    adiciona(event){
        
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
        this._limpaFormulario();
        
        console.log(this._listaNegociacoes.negociacoes);       
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