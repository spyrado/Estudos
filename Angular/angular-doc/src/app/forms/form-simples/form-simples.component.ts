import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-form-simples',
  templateUrl: './form-simples.component.html',
  styleUrls: ['form-simples.component.scss']
})
export class FormSimplesComponent implements OnInit {


  showSpinner: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  animaBotao(event){
    this.showSpinner = true;
    setTimeout(() => this.showSpinner = false, 700);
    event.preventDefault();
    event.target.classList.add('hinge','animate', 'btn-login-animate');
  }
  // adicionar animacao ao botao com btn-login-animate
}