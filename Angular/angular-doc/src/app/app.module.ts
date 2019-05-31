import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SearchComponent } from './search/search.component';
import { SideNavsModule } from './sidenavs/sidenavs.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SideNavsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
