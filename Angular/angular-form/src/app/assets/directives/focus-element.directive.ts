import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusElementDirective {

  numberOfClicks = 0;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') 
  onMouseLeaves() {
    this.elementRef.nativeElement.style.backgroundColor = 'transparent';
  }
  @HostListener('click', ['$event.target']) 
  onClickInput(input) {
    console.log('input', input, 'number of clicks:', this.numberOfClicks++);
    input.style.width = '80px';
    input.style.transition = 'width 1s ease-in-out';
  }
  @HostListener('focusout', ['$event.target'])
  focusOutInput(input){
    input.style.width = 'inherit';
  }
}