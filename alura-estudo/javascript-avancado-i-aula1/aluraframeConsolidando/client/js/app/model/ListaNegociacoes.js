class ListaNegociacoes{

    constructor(trap){
        
        this._listaNegociacoes = [];
    }
    
    get negociacoes(){
        return [].concat(this._listaNegociacoes);
    }
    
    inclui(negociacao){
        
        this._listaNegociacoes.push(negociacao);
    }
    
    esvazia(){
        
        this._listaNegociacoes = [];
    }
}