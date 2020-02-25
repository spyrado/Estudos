import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrosService } from '../shared/services/carros.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  
  public carros: Carro[];

  constructor(
    public navCtrl: NavController,
    private carrosService: CarrosService
  ) {}

  ngOnInit(): void {
    this.carrosService
      .list()
      .subscribe(carros => {
        this.carros = carros;
      });
  }

}

export interface Carro {
  nome: string;
  preco: number;
}
