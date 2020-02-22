import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Estados } from './shared/interface/estados';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Estados[]>('https://servicodados.ibge.gov.br/api/v1/localidades/distritos');
  }
}
