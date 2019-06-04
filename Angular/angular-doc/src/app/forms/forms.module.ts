import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSimplesComponent } from './form-simples/form-simples.component';
import { FormsRoutingModule } from './forms-routing.module';
import { MaterialModule } from '../shared/components/material/material.module';

@NgModule({
  declarations: [
    FormSimplesComponent
  ],
  imports: [ 
    CommonModule,
    FormsRoutingModule,
    MaterialModule
  ],
  exports: [],
  providers: [],
})
export class FormsModule {}