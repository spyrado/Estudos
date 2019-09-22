import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewUser } from "./new-user";
import { environment } from "../../../environments/environment";

const API = environment.apiUrl;

@Injectable()
export class SignUpService{

  constructor(private http: HttpClient){}

  // Verifica se o usuário já existe na base de dados
  checkUserNameTaken(userName: string){
    return this.http
      .get(API + '/user/exists/' + userName);
  }

  signup(newUser: NewUser){
    return this.http
      .post(API + '/user/signup', newUser);
  }
}