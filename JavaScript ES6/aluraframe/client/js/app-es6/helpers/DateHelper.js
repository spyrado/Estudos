export class DateHelper{
    
    constructor(){
        
        throw new Error("Date Helper não pode ser instanciada.");
    }
    
    static textoParaData(texto){
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato yyyy-mmm-dd');
        return new Date(...texto.split("-").map((va,i) => va - i % 2));
    }
    
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}