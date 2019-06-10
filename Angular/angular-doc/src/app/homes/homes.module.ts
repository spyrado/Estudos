import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SideNavsModule } from '../sidenavs/sidenavs.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    SideNavsModule
  ],
  exports: [],
  providers: [],
})
export class HomesModule {}