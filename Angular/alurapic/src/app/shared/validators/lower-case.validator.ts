import { AbstractControl } from "@angular/forms";

// Todo validator precisa receber uma classe AbstractControl como parametro
export function lowerCaseValidator(control: AbstractControl){

  // Verifico se o valor está em branco E se o valor NAO SEGUE minha expressao regular 
  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
    return { lowerCase: true }; // retorno a chave necessária para conseguir acessar no formulario
  }

  return null; // retorno null, isso é, está tudo ok.
}