import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioSimplesComponent } from './formulario-simples/formulario-simples.component';
import { FormularioGrupoComponent } from './formulario-grupo/formulario-grupo.component';
import { FocusElementDirective } from '../assets/directives/focus-element.directive';

@NgModule({
  declarations: [
    FormularioSimplesComponent,
    FormularioGrupoComponent,
    FocusElementDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormularioSimplesComponent,
    FormularioGrupoComponent
  ],
  providers: [],
})
export class FormularioSimplesModule {}