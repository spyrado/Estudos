import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { NicolasComponent } from './nicolas/nicolas.component';
import { BannerDirective } from './banner/banner.directive';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

@NgModule({
  declarations: [
    BannerComponent,
    TecnologiaComponent,
    NicolasComponent,
    BannerDirective
  ],
  imports: [ CommonModule ],
  exports: [
    BannerComponent
  ],
  entryComponents: [
    NicolasComponent,
    TecnologiaComponent
  ],
  providers: [],
})
export class BannersModule {}
