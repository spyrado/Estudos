'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoDao = function () {
    function NegociacaoDao(connection) {
        _classCallCheck(this, NegociacaoDao);

        this._connection = connection;
        this._store = 'negociacoes';
    }

    _createClass(NegociacaoDao, [{
        key: 'adiciona',
        value: function adiciona(negociacao) {
            var _this = this;

            return new Promise(function (resolve, reject) {

                //Precisamos de uma transacao para poder gravar dentro da objectStore
                //Crio uma transacao
                //Aponto para qual objectStore eu quero acessar.
                //Peco para adicionar minha negociacao ao store
                var request = _this._connection.transaction([_this._store], 'readwrite').objectStore(_this._store).add(negociacao);

                request.onsuccess = function (e) {
                    resolve();
                };

                request.onerror = function (e) {

                    console.log(e.target.error);
                    reject('N\xE3o foi poss\xEDvel adicionar a negocia\xE7\xE3o.');
                };
            });
        }
    }, {
        key: 'listaTodos',
        value: function listaTodos() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                //Precisamos de uma transacao para poder gravar dentro da objectStore
                //Crio uma transacao
                //Aponto para qual objectStore eu quero acessar.
                //Ele aponta para cada linha da nossa objectSore, esse é o cara que vai 'passear'por la
                var cursor = _this2._connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).openCursor();

                var negociacoes = [];

                cursor.onsuccess = function (e) {
                    //Recebe o ponteiro
                    var atual = e.target.result;
                    // Verifica se o ponteiro existe(se tem dado no ponteiro)
                    if (atual) {
                        // recebo o valor do ponteiro, apenas as propriedades q recebo
                        var dado = atual.value;

                        negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));
                        // Pedindo para o indexedDB ir para a proxima negociacao,
                        //Quando chamamos o continue, ele chama o metodo onsuccess novamente, e assim ele vai dar esse loop ate n ter mais dado para apontar
                        atual.continue();
                    } else {
                        //Depois que varrer todos os itens do banco, essa lista estará pronta
                        resolve(negociacoes);
                    }
                };

                cursor.onerror = function (e) {

                    console.log(e.target.error);
                    reject('N\xE3o foi possivel listar as negocia\xE7\xF5es.');
                };
            });
        }
    }, {
        key: 'apagaTodos',
        value: function apagaTodos() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {

                var request = _this3._connection.transaction([_this3._store], 'readwrite').objectStore(_this3._store).clear();

                request.onsuccess = function (e) {
                    return resolve('Negocia\xE7\xF5es apagadas com sucesso.');
                };

                request.onerror = function (e) {

                    console.log(e.target.error);
                    reject('Erro ao apagar negocia\xE7\xF5es');
                };
            });
        }
    }]);

    return NegociacaoDao;
}();
//# sourceMappingURL=NegociacaoDao.js.map