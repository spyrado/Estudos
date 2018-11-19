'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, HttpService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('HttpService', HttpService = function () {
                function HttpService() {
                    _classCallCheck(this, HttpService);
                }

                _createClass(HttpService, [{
                    key: '_handlerError',
                    value: function _handlerError(res) {
                        if (!res.ok) throw new Error(res.statusText);
                        return res;
                    }
                }, {
                    key: 'get',
                    value: function get(url) {
                        var _this = this;

                        return fetch(url).then(function (res) {
                            return _this._handlerError(res);
                        }).then(function (res) {
                            return res.json();
                        });

                        // return new Promise((resolve, reject) => {

                        //     //criando uma instancia de XMLHttpRequest
                        //     let xhttp = new XMLHttpRequest();

                        //     //preparando para abrir requisicao
                        //     xhttp.open('GET', url);

                        //     xhttp.onreadystatechange = () => {

                        //         if(xhttp.readyState == 4){
                        //             if(xhttp.status == 200){
                        //                 console.log("Obtendo as negociacoes do servidor");
                        //                 resolve(JSON.parse(xhttp.responseText));                            
                        //             }else{
                        //                 console.log(xhttp.responseText);
                        //                 reject(xhttp.responseText);
                        //             }
                        //         }
                        //     };

                        //     //Enviando requisicao
                        //     xhttp.send();
                        // });  
                    }
                }, {
                    key: 'post',
                    value: function post(url, dado) {
                        var _this2 = this;

                        return fetch(url, {
                            headers: { 'Content-type': 'application/json' },
                            method: 'post',
                            body: JSON.stringify(dado)
                        }).then(function (res) {
                            return _this2._handlerError(res);
                        });

                        //     return new Promise((resolve, reject) => {

                        //         let xhttp = new XMLHttpRequest();

                        //         xhttp.open('POST', url, true);
                        //         xhttp.setRequestHeader('Content-type', 'application/json');
                        //         xhttp.onreadystatechange = () => {

                        //             if(xhttp.readyState == 4){
                        //                 if(xhttp.status == 200){
                        //                     resolve(JSON.parse(xhttp.responseText));
                        //                 }else{
                        //                     reject(xhttp.responseText);
                        //                 }
                        //             }
                        //         }

                        //         xhttp.send(JSON.stringify(dado));
                        //     });
                        // }
                    }
                }]);

                return HttpService;
            }());

            _export('HttpService', HttpService);
        }
    };
});
//# sourceMappingURL=HttpService.js.map