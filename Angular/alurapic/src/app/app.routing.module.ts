import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', // esse cara indica para o redirect, carregar EXATAMENTE a rota indicada.
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    data: {
      title: 'Time Line'
    }
  },
  {
    path: 'p/add', 
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Add Photo'
    }
  },
  {
    path: 'p/:photoId', 
    component: PhotoDetailComponent,
    data: {
      title: 'Photo Detail'
    }
  },
  {
    path: 'not-found', 
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
  {
    path: 'error',
    component: GlobalErrorComponent,
    data: { 
        title: 'Error'
    }
  },
  {
    path: '**', 
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{

}