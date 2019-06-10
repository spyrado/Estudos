import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { PhotoComponent } from '../shared/components/photo/photo.component';
import { MaterialModule } from '../shared/components/material/material.module';
import { RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  declarations: [
    SideNavResponsiveComponent,
    PhotoComponent,
    MenuListComponent
  ],
  imports: [ 
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SideNavResponsiveComponent,
    MenuListComponent
  ],
  providers: [],
})
export class SideNavsModule {}