import { Component, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SideNavResponsive } from './sidenav-responsive';

@Component({
  selector: 'app-sidenav-responsive',
  templateUrl: './sidenav-responsive.component.html',
  styleUrls: ['./sidenav-responsive.component.scss']
})
export class SideNavResponsiveComponent implements OnDestroy {
  
  mobileQuery: MediaQueryList;
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

  arrowDown(target){

    console.log(target);

    if(this.arrowDownProperty){
      // this.arrowIcon.nativeElement.style.transform = 'rotate(0deg)';
    }else{
      // this.arrowIcon.nativeElement.style.transform = 'rotate(90deg)';
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
