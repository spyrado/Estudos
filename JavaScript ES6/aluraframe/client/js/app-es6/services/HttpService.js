export class HttpService{

    _handlerError(res){
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }
    
    get(url){
        
        return fetch(url)
            .then(res => this._handlerError(res))
            .then(res => res.json());
        
        // return new Promise((resolve, reject) => {
            
        //     //criando uma instancia de XMLHttpRequest
        //     let xhttp = new XMLHttpRequest();

        //     //preparando para abrir requisicao
        //     xhttp.open('GET', url);

        //     xhttp.onreadystatechange = () => {

        //         if(xhttp.readyState == 4){
        //             if(xhttp.status == 200){
        //                 console.log("Obtendo as negociacoes do servidor");
        //                 resolve(JSON.parse(xhttp.responseText));                            
        //             }else{
        //                 console.log(xhttp.responseText);
        //                 reject(xhttp.responseText);
        //             }
        //         }
        //     };

        //     //Enviando requisicao
        //     xhttp.send();
        // });  
    }
    
    post(url, dado){

        return fetch(url, {
            headers: {'Content-type': 'application/json'},
            method: 'post',
            body: JSON.stringify(dado)
        })
        .then(res => this._handlerError(res));
        
    //     return new Promise((resolve, reject) => {
            
    //         let xhttp = new XMLHttpRequest();
        
    //         xhttp.open('POST', url, true);
    //         xhttp.setRequestHeader('Content-type', 'application/json');
    //         xhttp.onreadystatechange = () => {

    //             if(xhttp.readyState == 4){
    //                 if(xhttp.status == 200){
    //                     resolve(JSON.parse(xhttp.responseText));
    //                 }else{
    //                     reject(xhttp.responseText);
    //                 }
    //             }
    //         }
            
    //         xhttp.send(JSON.stringify(dado));
    //     });
    // }
    }
}