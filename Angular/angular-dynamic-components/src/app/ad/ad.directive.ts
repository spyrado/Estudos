import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdHost]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    console.log(`Esse é o viewContainerRef do ng-template do ad-banner.component ${viewContainerRef}`);
  }
}
