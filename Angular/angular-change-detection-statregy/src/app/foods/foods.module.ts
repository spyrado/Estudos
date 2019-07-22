import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    FoodComponent,
    FoodListComponent
  ],
  imports: [ CommonModule ],
  exports: [
    FoodComponent
  ],
  providers: [],
})
export class FoodsModule {}
