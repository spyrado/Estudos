import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  // definimos assim, pois a regra da rota vai ser dada em outro local
  // e deixando o path como principal como path: '', torna flexível as chamadas.
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', 
        component: SigninComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
