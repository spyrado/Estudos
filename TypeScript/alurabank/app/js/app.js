System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacaoController_1, CONTROLLER;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            CONTROLLER = new NegociacaoController_1.NegociacaoController();
            $('.form').submit(CONTROLLER.adiciona.bind(CONTROLLER));
        }
    };
});
