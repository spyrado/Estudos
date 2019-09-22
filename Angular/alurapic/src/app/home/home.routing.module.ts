import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuard } from '../core/auth/login.guard';


const routes: Routes = [

  // definimos assim, pois a regra da rota vai ser dada em outro local
  // e deixando o path como principal como path: '', torna flexível as chamadas.
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '', 
        component: SigninComponent,
        data: {
          title: 'Sig in'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: 'Sign up'
        }
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
