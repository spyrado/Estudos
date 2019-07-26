import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [ CommonModule ],
  exports: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule {}