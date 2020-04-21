import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MockApiModule } from './mock/api/mock-api.module';

let extraModules = environment.mockApi ? [MockApiModule] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...extraModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
