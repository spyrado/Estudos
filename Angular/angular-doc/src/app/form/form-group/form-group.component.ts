import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  profileForm = this.fb.group({
    nome: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('/[a-zA-Z]*/g')
    ]],
    sobrenome: ['', Validators.required],
    textarea: ['', Validators.required],
    // selecioneHero: [''],
    // aceitoOsTermos: ['']
  });
  // selectHero: Object;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(){
    console.error(this.profileForm.value);
  }
}