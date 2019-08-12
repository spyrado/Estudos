import {
  ElementRef,
  OnInit,
  Directive
} from "@angular/core";
import {
  PlatformDetectorService
} from "../../../core/platform-detector/platform-detector.service";

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef < HTMLElement > ,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.element.nativeElement.click();
  }


}