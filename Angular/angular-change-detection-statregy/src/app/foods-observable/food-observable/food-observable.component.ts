import { Component } from '@angular/core';

@Component({
  selector: 'app-food-observable',
  templateUrl: './food-observable.component.html',
})
export class FoodObsevableComponent {

  foodNames = ['Bacon', 'Lettuce', 'Tomatoes'];

  constructor() { }

  addFood(food: string) {
    console.log('Food Adicionada');
    this.foodNames.push(food);
    // Passando uma NOVA REFERENCIA o Angular consegue detectar as alterações.
    // this.foodNames = [...this.foodNames, food];
  }
}
