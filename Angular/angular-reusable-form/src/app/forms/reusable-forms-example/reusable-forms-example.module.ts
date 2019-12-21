import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableFormsExampleComponent } from './reusable-forms-example.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileFormModule } from '../profile-form/profile-form.module';


@NgModule({
  declarations: [ReusableFormsExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileFormModule
  ],
  exports: [
    ReusableFormsExampleComponent
  ]
})
export class ReusableFormsExampleModule { }
