import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";


const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService{

    constructor(private http: HttpClient){}

    listFromUser(userName: string){
        
        return this.http
                .get<Photo[]>(API + '/'+userName+'/photos');
    }

    listFromUserPaginated(userName: string, page: number){
        // aqui temos que ter a ajuda do back-end, temos que linkar as informacoes.
        const params = new HttpParams()
            .append('page', page.toString()); // o nome do parametro em /photos?page=2 nesse caso e o valor do parametro.

        return this.http
                .get<Photo[]>(API + '/'+userName+'/photos',{params});
    }


}