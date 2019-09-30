import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {

  form: FormGroup;

  get emailControl() {
    return this.form.controls.email;
  }
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: ['', Validators.required]
    });
  }

}
