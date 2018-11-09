class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
        
        if(!/\w+\/\w+\/\w+/.test(this._inputDados)) throw new Error("formato inválido.");
    }

    envia() {
        
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        
        //cria um Arquivo com as suas propriedades;
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
        console.log(`O Arquivo ${arquivo.nome}.${arquivo.tipo} de tamanho ${arquivo.tamanho} foi enviado com sucesso.`);
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}