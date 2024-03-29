import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../modelos/carro';

@Injectable()
export class CarrosService {

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos');
  }
}