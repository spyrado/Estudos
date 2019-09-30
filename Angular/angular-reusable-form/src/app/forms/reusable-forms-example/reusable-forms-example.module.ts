import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableFormsExampleComponent } from './reusable-forms-example.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReusableFormsExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReusableFormsExampleModule { }
