import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSimplesComponent } from './form-simples/form-simples.component';
import { FormRoutingModule } from './form-routing.module';
import { MaterialModule } from '../shared/components/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormSimplesComponent
  ],
  imports: [ 
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FormRoutingModule
  ],
  exports: [],
  providers: [],
})
export class FormModule {}