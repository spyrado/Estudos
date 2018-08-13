class DateHelper{
    
    constructor(){
        
        throw new Error("Esta classe não pode ser instanciada.");
    }
    
    // transformando uma string de data, em objeto.
    static textoParaData(texto){
        
        
        if(!/^\d{4}\-\d{2}\-\d{2}$/.test(texto))
            throw new Error("A data não segue o formato yyyy-mm-dd.");
        
        return new Date(...texto.split("-").map((item,index) => index % 2 ? item - 1 : item));
    }
    
    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }
}