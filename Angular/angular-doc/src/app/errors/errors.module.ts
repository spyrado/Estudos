import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorsRoutingModule } from './errors.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    ErrorsRoutingModule
  ],
  exports: [],
})
export class ErrorsModule {}