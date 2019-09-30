import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableFormsExampleModule } from './forms/reusable-forms-example/reusable-forms-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReusableFormsExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
