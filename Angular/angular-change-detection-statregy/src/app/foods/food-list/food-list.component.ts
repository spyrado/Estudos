import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodListComponent {

  @Input() foodNames: string[];

  constructor(private changeDetectionRef: ChangeDetectorRef) { }

  // Ao chamar essa função, a view irá ser atualizada
  update() {
    this.changeDetectionRef.detectChanges();
  }

}
