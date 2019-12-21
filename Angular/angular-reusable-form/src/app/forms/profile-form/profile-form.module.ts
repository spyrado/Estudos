import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReusableProfileFormComponent } from './reusable-profile-form/reusable-profile-form.component';



@NgModule({
  declarations: [
    ProfileFormComponent,
    ReusableProfileFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfileFormComponent
  ]
})
export class ProfileFormModule { }
