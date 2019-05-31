import { Component, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SideNavResponsive } from './sidenav-responsive';
import { MatIcon } from '@angular/material';

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

  @ViewChild('arrowIcon', {read: ElementRef}) arrowIcon: ElementRef;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  arrowDownProperty: boolean = false;
  //JSON DE menu / submenu do sidenav
  sidenavs: SideNavResponsive[] = [
    {
      menu: {
        name: 'Reactive forms',
        submenu: [
          {
            name: 'Form simples'
          },
          {
            name: 'Form em grupo'
          }
        ]
      }
    },
    {
      menu: {
        name: 'Comunicação entre componentes',
        submenu: [
          {
            name: '@Input'
          },
          {
            name: '@Output'
          }
        ]
      }
    }
  ];

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  arrowDown(){

    if(this.arrowDownProperty){
      this.arrowIcon.nativeElement.style.transform = 'rotate(0deg)';
    }else{
      this.arrowIcon.nativeElement.style.transform = 'rotate(90deg)';
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
