import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdBannerComponent } from './ad/ad-banner/ad.banner.component';

const routes: Routes = [
  { path: '', component: AdBannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
