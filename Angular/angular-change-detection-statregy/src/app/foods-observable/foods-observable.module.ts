import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodObsevableComponent } from './food-observable/food-observable.component';
import { FoodObservableListComponent } from './food-list-observable/food-list-observable.component';
import { FoodObservableRoutingModule } from './food-observable/food-observable-routing.module';

@NgModule({
  declarations: [
    FoodObsevableComponent,
    FoodObservableListComponent
  ],
  imports: [
    CommonModule,
    FoodObservableRoutingModule
  ],
  exports: [
    FoodObsevableComponent,
  ],
  providers: [],
})
export class FoodsObservableModule {}
