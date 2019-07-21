import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBannerComponent } from './ad-banner/ad.banner.component';
import { AdDirective } from './ad.directive';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AdBannerComponent,
    AdDirective,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [ CommonModule ],
  exports: [
    AdBannerComponent
  ],
  entryComponents: [
    HeroProfileComponent,
    HeroJobAdComponent
  ],
  providers: [
    AdService
  ],
})
export class AdModule {}
