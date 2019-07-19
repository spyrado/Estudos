import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';
import { AdComponent } from '../ad';

@Component({
  selector: 'app-ad-banner',
  template: `
  <div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template appAdHost></ng-template>
  </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  // @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;

    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as AdComponent).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
