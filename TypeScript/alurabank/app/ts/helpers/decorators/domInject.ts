export function domInject(seletor: string){
    
    return function(target: any, key: string){

        let elemento: JQuery;

        const getter = function(){

            if(!elemento){
                console.log(`Buscando ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }

            return elemento;
        }
        /* Estou definindo uma propriedade para o elemento do DOM que for interceptado no meu decorator
        passo target(alvo, minha classe nesse caso), e passo a key(minha propriedade nesse caso) 
        e digo para o get, pegar minha funcao getter que retorna o elemento do DOM */
        Object.defineProperty(target, key,{
            get: getter
        });
    }
}