import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { PhotoComponent } from '../shared/components/photo/photo.component';
import { MaterialModule } from '../shared/components/material/material.module';
import { RouterModule } from '@angular/router';
import { SideNavMenuListComponent } from './sidenav-menu-list/sidenav-menu-list.component';

@NgModule({
  declarations: [
    SideNavResponsiveComponent,
    PhotoComponent,
    SideNavMenuListComponent
  ],
  imports: [ 
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SideNavResponsiveComponent,
    SideNavMenuListComponent
  ],
  providers: [],
})
export class SideNavsModule {}