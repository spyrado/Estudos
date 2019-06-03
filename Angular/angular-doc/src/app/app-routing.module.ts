import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavResponsiveComponent } from './sidenavs/sidenav-responsive/sidenav-responsive.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SideNavResponsiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
