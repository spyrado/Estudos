import {Imprimivel} from './index';

export class Negociacao extends Imprimivel{

    constructor(
        readonly data: Date, 
        readonly quantidade: number, 
        readonly valor: number
    ){ super(); } // coloquei o super, pelo motivo de q estou extendendo da classe imprimivel.

    get volume(){
        return this.quantidade * this.valor;
    }

    paraTexto(): void{

        console.log('Impressão');
        console.log(
           `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        )
    }
}