import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
})
export class FoodComponent {

  foodNames = ['Bacon', 'Lettuce', 'Tomatoes'];

  constructor() { }

  addFood(food: string) {
    console.log('Food Adicionada');
    this.foodNames.push(food);
  }
}
