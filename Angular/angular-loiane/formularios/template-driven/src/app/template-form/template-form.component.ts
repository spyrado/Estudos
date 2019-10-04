import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface MeuForm {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.usuario);
  }

}
