import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-food-observable',
  templateUrl: './food-observable.component.html',
})
export class FoodObsevableComponent {

  foodNames = new BehaviorSubject(['Bacon', 'Lettuce', 'Tomatoes']);

  constructor() {}

  addFood(food) {
    console.log('Food Adicionada');
    this.foodNames.next(food);
  }
}
