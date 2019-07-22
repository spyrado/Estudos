import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodObsevableComponent } from './food-observable.component';

const routes: Routes = [
  {
    path: '',
    component: FoodObsevableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodObservableRoutingModule { }
