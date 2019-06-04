import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SearchComponent } from './search/search.component';
import { SideNavsModule } from './sidenavs/sidenavs.module';
import { AppRoutingModule } from './app-routing.module';
import { HomesModule } from './homes/homes.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
