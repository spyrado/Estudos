import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodListComponent {

  @Input() foodNames: string[];

  constructor() { }

}
