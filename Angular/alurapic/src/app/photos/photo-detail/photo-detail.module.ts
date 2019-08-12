import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';

@NgModule({
  declarations: [
    PhotoDetailComponent
  ],
  imports: [ CommonModule ],
  exports: [
    PhotoDetailComponent
  ]
})
export class PhotoDetailModule {}