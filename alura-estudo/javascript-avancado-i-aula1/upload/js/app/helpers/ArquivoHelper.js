class ArquivoHelper{
    
    static cria(arquivo){
        return new Arquivo(...arquivo.toUpperCase().split("/"));
    }
}