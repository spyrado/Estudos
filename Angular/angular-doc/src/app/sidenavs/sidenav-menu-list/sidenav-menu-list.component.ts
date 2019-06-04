import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideNavResponsive } from '../sidenav-responsive/sidenav-responsive';

@Component({
  selector: 'app-sidenav-menu-list',
  templateUrl: './sidenav-menu-list.component.html',
  styleUrls: ['sidenav-menu-list.component.scss']
})
export class SideNavMenuListComponent implements OnInit {

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

  @Output() textoTitulo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  setTextoTitulo(texto){
    this.textoTitulo.emit(texto);
  }
}
