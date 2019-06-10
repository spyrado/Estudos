import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuList } from './menu-list';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  //JSON DE menu / submenu do sidenav
  menuList: MenuList[] = [
    {
      name: 'Reactive forms',
      submenu: [
        {
          name: 'Form simples',
          link: 'forms/form-simples'
        },
        {
          name: 'Form em grupo',
          link: 'forms/form-group'
        }
      ]
    },
    { 
      name: 'Comunicação entre componentes',
      submenu: [
        {
          name: '@Input',
          link: '123'
        },
        {
          name: '@Output',
          link: 'sads'
        }
      ]
    }
  ];

  @Output() textoTitulo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  setTextoTitulo(texto){
    this.textoTitulo.emit(texto);
  }
}
