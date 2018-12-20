import { Negociacoes, Negociacao, Mensagem } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagem = new Mensagem();
    private _mensagemView = new MensagemView('#mensagemView',true);

    constructor() {
        
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g,','));

        if(!this._ehDiaUtil(data)){
            this._mensagem.texto = 'Não pode ser adicionada uma negociacao em fim de semana.';
            this._mensagemView.update(this._mensagem);
            return;
        }
        
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    importaDados(){

        function isOk(res: Response){
            
            if(res.ok)
                return res;
            else
                throw new Error(res.statusText);
        }
        
        fetch('http://localhost:8080/dados')
            .then(res => isOk(res))
            .then(res => res.json())
            .then((dados: any[]) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => { this._negociacoes.adiciona(negociacao) })
                    this._negociacoesView.update(this._negociacoes)
                }
            )
    }

    private _ehDiaUtil(data: Date){
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {

    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinte,
    Sexta,
    Sabado
}