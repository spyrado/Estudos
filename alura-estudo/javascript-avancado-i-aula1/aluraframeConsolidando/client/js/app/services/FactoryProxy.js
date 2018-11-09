class FactoryProxy{
    
    static create(obj, props){
        return new Proxy(obj, {
            
            get(target, prop, receiver){
                
            }
            
        });
    }
}