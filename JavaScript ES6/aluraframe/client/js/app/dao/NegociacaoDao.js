class NegociacaoDao {

    constructor(connection){

        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao){
        return new Promise((resolve,reject) => {
            
            //Precisamos de uma transacao para poder gravar dentro da objectStore
            //Crio uma transacao
            //Aponto para qual objectStore eu quero acessar.
            //Peco para adicionar minha negociacao ao store
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = e => {
                resolve();
            }

            request.onerror = e => {

                console.log(e.target.error);
                reject(`Não foi possível adicionar a negociação.`);
            }
        });
    }

    listaTodos(){
        return new Promise((resolve,reject) => {
            //Precisamos de uma transacao para poder gravar dentro da objectStore
            //Crio uma transacao
            //Aponto para qual objectStore eu quero acessar.
            //Ele aponta para cada linha da nossa objectSore, esse é o cara que vai 'passear'por la
            let cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();
            
            let negociacoes = [];
            
            cursor.onsuccess = e => {
                //Recebe o ponteiro
                let atual = e.target.result;
                // Verifica se o ponteiro existe(se tem dado no ponteiro)
                if(atual){
                    // recebo o valor do ponteiro, apenas as propriedades q recebo
                    let dado = atual.value;
                    
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));
                    // Pedindo para o indexedDB ir para a proxima negociacao,
                    //Quando chamamos o continue, ele chama o metodo onsuccess novamente, e assim ele vai dar esse loop ate n ter mais dado para apontar
                    atual.continue();
                }else{
                    //Depois que varrer todos os itens do banco, essa lista estará pronta
                    resolve(negociacoes);
                }
            }
            
            cursor.onerror = e => {

                console.log(e.target.error);
                reject(`Não foi possivel listar as negociações.`);
            } 
        });
    }

    apagaTodos(){
        
        return new Promise((resolve, reject) => {

            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();
            
            request.onsuccess = e => resolve(`Negociações apagadas com sucesso.`);

            request.onerror = e => {

                console.log(e.target.error);
                reject(`Erro ao apagar negociações`)
            }

        });
    }
}