import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsModule } from './foods/foods.module';
import { FoodsObservableModule } from './foods-observable/foods-observable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoodsModule,
    FoodsObservableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
