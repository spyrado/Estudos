import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-grupo',
  templateUrl: './formulario-grupo.component.html'
})
export class FormularioGrupoComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      email: [null],
      password: [null, Validators.required],
      address: [null],
      city: [null],
      state: [null],
      zip: [null],
      checked: [false]
    });
  }

  submitForm() {
    console.log(this.registerForm);
  }
}
