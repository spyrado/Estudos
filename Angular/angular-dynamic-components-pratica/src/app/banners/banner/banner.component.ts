import { Component, OnInit, ViewChild, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { BannerDirective } from './banner.directive';
import { NicolasComponent } from '../nicolas/nicolas.component';
import { TecnologiaComponent } from '../tecnologia/tecnologia.component';

@Component({
  selector: 'app-banner',
  template: `
    <div class="warnning-content">
      <h1 class="title">WARNNINGS</h1>
      <ng-template appBanner></ng-template>
    </div>
  `,
  // tslint:disable-next-line: max-line-length
  styles: ['.warnning-content{ background-color: rgba(255, 255, 0, 0.5686274509803921);width: 800px;margin: 0 auto;text-align: center;border: 1px solid #aba5a5;border-radius: 6px;}']
})
export class BannerComponent implements OnInit, AfterViewInit {

  @ViewChild(BannerDirective) bannerHost: BannerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    // console.log(this.bannerHost.viewContainerRef, document.querySelector('.warnning-content'));
    this.loadComponent();
  }

  ngAfterViewInit(): void {
    // console.log(this.bannerHost.viewContainerRef, document.querySelector('.warnning-content'));
  }


  public loadComponent() {

    console.log(this.bannerHost);

    // Resolvo o componente
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TecnologiaComponent);

    // Pego a referencia do container
    const viewContainerRef = this.bannerHost.viewContainerRef;

    // Limpo qualquer referencia de container que tenha
    viewContainerRef.clear();

    // Incluo o component resolvido dentro da view
    const componentRef = viewContainerRef.createComponent(componentFactory);

    console.log(componentFactory);
    console.log(viewContainerRef);
    console.log(componentRef);
  }
}
