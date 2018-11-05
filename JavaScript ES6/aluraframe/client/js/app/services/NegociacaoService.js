class NegociacaoService{
    
    constructor(){
    
        this._http = new HttpService();
    }
    
    obterNegociacoes(){
        
        return Promise
            .all([
                this.obterNegociacoesDaSemana(),
                this.obterNegociacoesDaSemanaAnterior(),
                this.obterNegociacoesDaSemanaRetrasada()
            ])
            .then(negociacoes => 
                  negociacoes
                    .reduce((arrayAchatado, array) => arrayAchatado.concat(array), []))
            .catch(erro => {
                throw new Error(erro);
            });
    }
    
    obterNegociacoesDaSemana(){
        
        return new Promise((resolve, reject) => {
            
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => 
                    resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))))
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                });
        });
    }
    
    obterNegociacoesDaSemanaAnterior(){
        
        return new Promise((resolve, reject) => {
            
            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => 
                    resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))))
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                });
        });
        
    }
    
    obterNegociacoesDaSemanaRetrasada(){
        
        return new Promise((resolve, reject) => {
            
            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => 
                    resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))))
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                });
        });
    }
}