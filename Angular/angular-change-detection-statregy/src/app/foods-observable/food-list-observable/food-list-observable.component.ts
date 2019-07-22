import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-food-observable-list',
  templateUrl: './food-list-observable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodObservableListComponent {

  @Input() foodNames: string[];

  constructor(private changeDetectionRef: ChangeDetectorRef) { }

  // Ao chamar essa função, a view irá ser atualizada
  update() {
    this.changeDetectionRef.detectChanges();
  }

}
