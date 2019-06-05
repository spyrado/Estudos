import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSimplesComponent } from './form-simples/form-simples.component';

const routes: Routes = [
  { path: '', component: FormSimplesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class FormRoutingModule { }
