import { Negociacoes, Negociacao, Mensagem } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import {LogarTempoDeExecucao} from '../helpers/decorators/index';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagem = new Mensagem();
    private _mensagemView = new MensagemView('#mensagemView',true);

    constructor() {
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    @LogarTempoDeExecucao()
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