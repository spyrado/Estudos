class NegociacaoController{

    constructor(){
        
        let $ = document.querySelector.bind(document);
        
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
    }
    
    adiciona(event){
        
        event.preventDefault();
        
        let data = new Date(
            ...this.inputData.value
            .split("-")
            .map((va,i) => va - i % 2)
        );
        
        let negociacao = new Negociacao(
            data,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        
        let dataToString = negociacao.data.getDate() + "/" +
                           (negociacao.data.getMonth()+1) + "/" +
                           negociacao.data.getFullYear();
        console.log(dataToString);
        
    }
}