class Conta{ //classe PAI

    constructor(saldo){
        
        this._saldo = saldo;
    }
    
    get saldo(){
        return this._saldo;
    }
    
    //Criando uma espécie de metodo abstrato
    atualiza(taxa){
        
        throw new Error("necessário implementar metodo atualiza.");
    }
}