import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioSimplesModule } from './formularios/formularios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormularioSimplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
