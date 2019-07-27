import { Injectable } from '@angular/core';

const validUser = {
  login: 'nicolas',
  senha: 123
}

@Injectable()
export class LoginService {
  
  constructor(){}

  auth(login: string, senha: number): boolean{
    const authLogin = {login,senha};
    if(validUser.login === authLogin.login 
      && validUser.senha === authLogin.senha){
        return true;
      } else {
        return false;
      }
  }
}