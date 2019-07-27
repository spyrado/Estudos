import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [ CommonModule ],
  exports: [
    HomeComponent
  ],
  providers: [
    LoginService
  ],
})
export class HomeModule {}