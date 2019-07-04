import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-onpush';
  items: Object[] = [{nome: 'Nicolas'},{nome: 'Nicolas'},{nome: 'Nicolas'},{nome: 'Nicolas'},{nome: 'Nicolas'}];
  constructor(){
    // setInterval(() => {
    //   this.items.push({nome: 'Augusto'});
    // },1000);
  }
  
  add(){
    this.items[0] = {nome: 'asdasd'};
  }

  trackByFn(index, value){
    return value.nome;
  }
}
