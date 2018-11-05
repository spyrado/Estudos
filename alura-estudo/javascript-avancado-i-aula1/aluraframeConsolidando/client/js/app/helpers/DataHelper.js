class DataHelper{

    static textoParaData(texto){
        return new Date(
            ...
            texto.split('-')
            .map((d,i) => d - (i % 2))            
        );
    }
    
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}