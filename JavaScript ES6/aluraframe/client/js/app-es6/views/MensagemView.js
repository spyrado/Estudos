import {View} from './View';

export class MensagemView extends View{
    
    constructor(elemento){
        super(elemento);
    }
    
    template(model){
        return model.texto ? `<div class="alert alert-info">${model.texto}</div>` : ``;
    }
    
}