import { ErrorHandler, Injector, Injectable } from "@angular/core";
// Aqui eu digo, importa tudo da pasta stacktrace, nomeio esse tudo de StackTrace
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { UserService } from "../../core/user/user-service";

// Usando o decorator Injectable para fazer a injecao de dependencia de INJECTOR
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    console.log('passei pelo handler');

    /* 
      PORQUE NAO INJETAMOS  O USERSERVICE NO CONSTRUTOR?, POR QUE O ANGULAR PRIMEIRO VAI TENTAR INJETAR O NOSSO COMPONENTE
      CASO NOSSO COMPONENTE DER ALGUM ERRO, O GLOBAL ERROR HANDLER NAO VAI ESTAR PRONTO,
      por isso estamos fazendo a injecao manualmente com o injector do angular.
    */
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);

    const url = location instanceof PathLocationStrategy ? location.path() : '';
    // Pegando a mensagem de erro
    const message = error.message ? error.message : error.toString();

    // Pegando a stack de errors
    StackTrace
      .fromError(error)
      .then(stackFrames => {
        const stackAsString = stackFrames
          .map(stackFrame => stackFrame.toString())
          .join('\n');
          console.log(message);
          console.log(stackAsString);
          console.log('o que será enviado para o serviço');
          console.log({ message, url, userName: userService.getUserName() ,stack: stackAsString });
      });
  }
}