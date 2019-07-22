import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-observable-list',
  templateUrl: './food-list-observable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodObservableListComponent implements OnInit {

  @Input() foodNames: Observable<string>;
  foods: string[] = [];

  constructor(private changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.foodNames
      .subscribe(food => {
        this.foods = [...this.foods, food];
        this.changeDetectionRef.markForCheck();
      }
    );
  }

}
