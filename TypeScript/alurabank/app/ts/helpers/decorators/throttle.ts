export function throttle(milisegundos = 500){
    
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        // eu pego o metodo original e guardo em uma constante.
        const metodoOriginal = descriptor.value;

        let timer = 0;
        // pego o metodo original, e sobrescrevo ele, aceitando any argumentos.. como vetor
        descriptor.value = function(...args: any[]){

            // se o metodo tiver evento, executa o prevent default.
            if(event) event.preventDefault();

            //limpa o intervalo se o botao for clicado mais de uma vez, para n ficar gerando requisicao atoa no back..
            clearInterval(timer);
            // executa o metodo apois 500 ms ou a quantidade q for definida no decorator aonde esta sendo chamado..
            timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);
            
        }

        return descriptor;
    }
}