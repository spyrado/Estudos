import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent
  ],
  imports: [ 
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  exports: [
    PhotoDetailComponent,
    PhotoCommentsComponent
  ]
})
export class PhotoDetailModule {}