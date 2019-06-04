import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-form-simples',
  templateUrl: './form-simples.component.html',
  styleUrls: ['form-simples.component.scss']
})
export class FormSimplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  animaBotao(event){
    event.preventDefault();
    event.target.classList.add('hinge','animate');
  }
}
