class DateHelper{
    
    constructor(){
        
        throw new Error("Essa classe não deve ser instanciada.");
    }
    
    static textoParaData(texto){
        //Chamamos esse metodo de FAIL FAST
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error("Insira a data no formato yyyy-mm-dd");
        return new Date(...texto.split("-").map((va,i) => va - i % 2));
    }
    
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}