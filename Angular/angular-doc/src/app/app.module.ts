import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AsidesModule } from './asides/asides.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AsidesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
