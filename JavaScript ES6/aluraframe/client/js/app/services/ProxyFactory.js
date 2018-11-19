"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyFactory = function () {
    function ProxyFactory() {
        _classCallCheck(this, ProxyFactory);
    }

    _createClass(ProxyFactory, null, [{
        key: "create",
        value: function create(objeto, props, acao) {
            return new Proxy(objeto, {
                get: function get(target, prop, receiver) {
                    if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {

                        return function () {

                            console.log("interceptando " + prop);
                            //primeiro adiciona
                            Reflect.apply(target[prop], target, arguments);
                            //depois atualiza
                            return acao(target);
                        };
                    }

                    return Reflect.get(target, prop, receiver);
                },
                set: function set(target, prop, value, receiver) {
                    if (props.includes(prop)) {
                        target[prop] = value;
                        acao(target);
                    }
                    return Reflect.set(target, prop, value, receiver);
                }
            });
        }
    }, {
        key: "_ehFuncao",
        value: function _ehFuncao(func) {
            return typeof func == "function";
        }
    }]);

    return ProxyFactory;
}();