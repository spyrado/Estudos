import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController, Alert } from 'ionic-angular';
import { CarrosService } from '../../providers/carros-service/carros-service';
import { NavLifeCycle } from '../../utils/ionic/nav/nav-lifecycle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    CarrosService
  ]
})
export class HomePage implements NavLifeCycle{
  
  public carros: Carro[];
  private loading: Loading;
  private alert: Alert;

  constructor(
    public navCtrl: NavController,
    private carrosService: CarrosService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.setLoading();
    this.setAlert();
    this.getCarros();
  }

  getCarros() {
    this.loading.present();
    this.carrosService
      .list()
      .subscribe(
        carros => {
          this.carros = carros;
          this.loading.dismiss();
        },
        error => {
          console.log(error);
          this.loading.dismiss();
          this.alert.present();
        }
      );
  }

  setLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde o carregamento dos carros...'
    });
  }

  setAlert() {
     this.alert = this.alertCtrl.create({
      title: 'Falha na conexão',
      subTitle: 'Não foi possível carregar a lista de carros. Tente novamente mais tarde.',
      buttons: [
        { text: 'Ok'}
      ]
    });
  }

}

export interface Carro {
  nome: string;
  preco: number;
}
