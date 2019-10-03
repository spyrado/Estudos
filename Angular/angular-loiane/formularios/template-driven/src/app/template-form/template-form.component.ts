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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const meuForm = form.value as MeuForm;
    console.log(meuForm.nome);
    console.log(meuForm.email);
  }

}
