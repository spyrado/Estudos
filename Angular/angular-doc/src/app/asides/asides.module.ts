import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [ 
    CommonModule,
    MaterialModule
  ],
  exports: [
    AsideComponent
  ],
  providers: [],
})
export class AsidesModule {}