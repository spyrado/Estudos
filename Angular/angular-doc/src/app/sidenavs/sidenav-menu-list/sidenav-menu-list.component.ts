import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void { }
}
