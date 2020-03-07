import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController, Alert } from 'ionic-angular';
import { CarrosService } from '../../providers/carros-service/carros-service';
import { NavLifeCycle } from '../../utils/ionic/nav/nav-lifecycle';
import { Carro } from '../../modelos/carro';
import { EscolhaPage } from '../escolha/escolha';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    CarrosService
  ]
})
export class HomePage implements NavLifeCycle {
  
  public carros: Carro[];
  private loading: Loading;
  private alert: Alert;

  constructor(
    public navCtrl: NavController,
    private carrosService: CarrosService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  // Life Cyclo do IONIC -> similar ao NgOnInit do Angular
  ionViewDidLoad() {
    console.log('INICIEI A HOME');
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

  selecionaCarro(carro: Carro) {
    this.navCtrl.push(EscolhaPage, {
      carroSelecionado: carro
    });
  }

}