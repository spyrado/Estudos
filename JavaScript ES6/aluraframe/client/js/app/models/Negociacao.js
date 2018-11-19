"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Negociacao = function () {
    function Negociacao(_data, _quantidade, _valor) {
        _classCallCheck(this, Negociacao);

        Object.assign(this, {
            _data: new Date(_data.getTime()),
            _quantidade: _quantidade,
            _valor: _valor
        });
        Object.freeze(this);
    }

    _createClass(Negociacao, [{
        key: "isEquals",
        value: function isEquals(outraNegociacao) {
            return JSON.stringify(this) == JSON.stringify(outraNegociacao);
        }
    }, {
        key: "data",
        get: function get() {
            return new Date(this._data.getTime());
        }
    }, {
        key: "quantidade",
        get: function get() {
            return this._quantidade;
        }
    }, {
        key: "valor",
        get: function get() {
            return this._valor;
        }
    }, {
        key: "volume",
        get: function get() {
            return this.valor * this.quantidade;
        }
    }]);

    return Negociacao;
}();