import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { PhotoComponent } from '../shared/components/photo/photo.component';
import { MaterialModule } from '../shared/components/material/material.module';

@NgModule({
  declarations: [
    SideNavResponsiveComponent,
    PhotoComponent
  ],
  imports: [ 
    CommonModule,
    MaterialModule
  ],
  exports: [
    SideNavResponsiveComponent
  ],
  providers: [],
})
export class SideNavsModule {}