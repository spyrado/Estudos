import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorsRoutingModule } from './errors.routing.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [ 
    ErrorsRoutingModule
  ],
  exports: [],
})
export class ErrorsModule {}