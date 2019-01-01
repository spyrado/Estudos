import { Negociacoes, Negociacao, Mensagem } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from "../helpers/index";

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
    private _service = new NegociacaoService();

    constructor() {
        
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona(): void {

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
        imprime(negociacao, this._negociacoes);
        this._negociacoesView.update(this._negociacoes);
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    @throttle()
    async importaDados() {

        try{

            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {
    
                    if(res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);
                    }
                })
    
                const negociacoesJaImportadas = this._negociacoes.paraArray();

                negociacoesParaImportar
                    .filter(negociacao => 
                        !negociacoesJaImportadas.some(jaImportada => 
                            negociacao.ehIgual(jaImportada)))
                    .forEach(negociacao => 
                    this._negociacoes.adiciona(negociacao));

                this._negociacoesView.update(this._negociacoes);
        }catch(err){

            this._mensagem.texto = err.message;
            this._mensagemView.update(this._mensagem);

        }


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