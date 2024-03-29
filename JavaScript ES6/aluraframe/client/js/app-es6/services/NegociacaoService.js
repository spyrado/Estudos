import {HttpService} from './HttpService';
import {ConnectionFactory} from './ConnectionFactory';
import {NegociacaoDao} from '../dao/NegociacaoDao';
import {Negociacao} from '../models/Negociacao';

export class NegociacaoService{
    
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

    cadastra(negociacao){

        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação adicionada com sucesso.')
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possivel adicionar a negociacao');
            });
    }

    lista(){

        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {

                console.log(erro);
                throw new Error('Não foi possível obter as negociações.');
            })
    }

    apaga(){

       return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(() => 'Negociacoes apagadas com sucesso.')
            .catch(erro => {

                console.log(erro);
                throw new Error('Não foi possivel apagar as negociacoes');
            });
    }

    importa(listaAtual){

        return this.obterNegociacoes()
            .then(negociacoes => negociacoes.filter(negociacao =>
                !listaAtual.some(negociacaoExistente =>
                    negociacao.isEquals(negociacaoExistente)))
            )
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociacões.');
            });
    }
}