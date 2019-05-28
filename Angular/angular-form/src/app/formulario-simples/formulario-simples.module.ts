import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioSimplesComponent } from './formulario-simples.component';

@NgModule({
  declarations: [
    FormularioSimplesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormularioSimplesComponent
  ],
  providers: [],
})
export class FormularioSimplesModule {}