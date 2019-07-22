import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './foods/food/food.component';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent
  },
  {
    path: 'food-observable',
    loadChildren: './foods-observable/foods-observable.module#FoodsObservableModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
