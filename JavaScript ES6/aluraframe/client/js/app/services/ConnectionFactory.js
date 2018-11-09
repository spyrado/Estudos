var stores = ['negociacoes'],
    version = 4,
    dbName = 'aluraframe';

class ConnectionFactory{
    
    constructor(){
        throw new Error('Não é possivel criar instãncias de ConnectionFactory');
    }
    
    static getConnection(){
        
        return new Promise((resolve, reject) => {
            
            let openRequest = window.indexedDB.open(dbName,version);
            
            openRequest.onupgradeneeded = e => {
                
            };
            
            openRequest.onsuccess = e => {
                
                console.log('Conexao obtida com sucesso.');
            };
            
            openRequest.onerror = e => {
                
                console.log('Erro na conexao.');
                console.log(e.target.error);
            };
            
        });
    }
    
}