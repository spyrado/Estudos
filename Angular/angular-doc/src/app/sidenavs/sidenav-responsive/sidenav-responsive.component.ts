import { Component, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav-responsive',
  templateUrl: './sidenav-responsive.component.html',
  styleUrls: ['./sidenav-responsive.component.scss']
})
export class SideNavResponsiveComponent implements OnDestroy, OnChanges {
  
  mobileQuery: MediaQueryList;
  title = 'Doc';
  photo = {
    url: '../../assets/img/carro-vermelho.jfif',
    description: 'Super carro cor vermelha'
  }

  arrowDownProperty: boolean = false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.title)
      console.log(changes);
  }

  recebeTexto($event){
    debugger;
    console.log($event);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
