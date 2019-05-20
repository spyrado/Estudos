import { Injectable } from "@angular/core";
import { SignUpService } from "./signup.service";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService{

  constructor(private signUpService: SignUpService){}

  checkUserNameTaken(){
    return (control: AbstractControl) => {

      // Primeiro eu pego o valor do formulario, dps de 300 milisegundos,
      // eu processo ele no switchMap(ele para de ouvir o debounce e comeca a ouvir o checkUserNameTaken)
      // dps esse metodo vai retornar um booleano, porem para a validacao de formulario,
      // eu preciso de um null, ou de um objeto javascript, ai eu faço a transformacao desse dado,
      // utilizando o map do rxjs
      // porem, o sistema de validacao de formulario ainda n vai funcionar, pois ele n sabe quando
      // essa operacao terminou, ate aqui ele vai retornar um observable, e ele sabe dar um subscribe,
      // porem n sabe ver quando terminou, pra isso vamos utilizar mais um operador do rxjs,
      // chamado first
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => this.signUpService.checkUserNameTaken(userName))) // retorna um boolean
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null)) // retorna o valor que realmente interessa
        .pipe(first()); // esse first() pega um unico valor, isso é, como agt fez com debounce

        // o usuario vai estar digitando: lalalala, e quando finalizar o debounce, o first pega
        // o primeiro valor, que nesse caso é o lalalala, e envia.
    }
  }
}