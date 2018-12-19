export function LogarTempoDeExecucao(emSegundos: boolean = false){
    
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        // eu pego o metodo original e guardo em uma constante.
        const metodoOriginal = descriptor.value;

        // pego o metodo original, e sobrescrevo ele, aceitando any argumentos.. como vetor
        descriptor.value = function(...args: any[]){

            let unidade = 'ms'
                ,divisor = 1;

            if(emSegundos){
                unidade = 's';
                divisor = 1000;
            }

            console.log('----------------');
            console.log(`Parametros passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`);
            const t0 = performance.now();
            // recebo o retorno do metodo, CASO ele retorne algo
            const retorno = metodoOriginal.apply(this, args);
            const t1 = performance.now();
            console.log(`O retorno do metodo ${propertyKey}: é ${JSON.stringify(retorno)}`);
            console.log(`O  metodo ${propertyKey}, demorou:  ${(t1-t0)/divisor} ${unidade}`);
            // e dou um retorno do que o retorno do metoroOriginal me retornou.
            return retorno;
        }

        return descriptor;
    }
}