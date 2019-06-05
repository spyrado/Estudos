import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSimplesComponent } from './form-simples/form-simples.component';
import { FormGroupComponent } from './form-group/form-group.component';

const routes: Routes = [
  { path: 'form-simples', component: FormSimplesComponent },
  { path: 'form-group', component: FormGroupComponent }
  // ARRUMAR ESSAS ROTAS TA TUDO BAGUNÇADO / BUGADO ****************************************
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class FormRoutingModule { }
