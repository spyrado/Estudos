System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacoesView;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends index_1.View {
                template(model) {
                    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                ${model.paraArray().map(n => `
                        <tr>
                            <td>${n.data.getDate()}/${n.data.getMonth() + 1}/${n.data.getFullYear()}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
            <script>alert('oi');</script>
        `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
