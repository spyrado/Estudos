import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { MaterialModule } from '../shared/components/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [ 
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AsideComponent
  ],
  providers: [],
})
export class AsidesModule {}