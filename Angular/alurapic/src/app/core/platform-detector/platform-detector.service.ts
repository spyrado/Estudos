import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platFormId: string){}

  // Verifica se o component está sendo renderizado em um browser.
  isPlatformBrowser(){
    return isPlatformBrowser(this.platFormId);
  }
}