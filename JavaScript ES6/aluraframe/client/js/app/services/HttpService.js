class HttpService{
    
    get(url){
        
        return new Promise((resolve, reject) => {
            
            //criando uma instancia de XMLHttpRequest
            let xhttp = new XMLHttpRequest();

            //preparando para abrir requisicao
            xhttp.open('GET', url);

            xhttp.onreadystatechange = () => {

                if(xhttp.readyState == 4){
                    if(xhttp.status == 200){
                        console.log("Obtendo as negociacoes do servidor");
                        resolve(JSON.parse(xhttp.responseText));                            
                    }else{
                        console.log(xhttp.responseText);
                        reject(xhttp.responseText);
                    }
                }
            };

            //Enviando requisicao
            xhttp.send();
        });  
    }
}