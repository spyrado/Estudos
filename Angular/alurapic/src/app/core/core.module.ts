import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { AlertModule } from '../shared/components/alert/alert.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MenuModule } from '../shared/components/menu/menu.module';

@NgModule({
  declarations: [ 
    HeaderComponent,
    FooterComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // aqui eu provido o HTTP_INTERCEPTORS
      useClass: RequestInterceptor, // Classe q será usada toda vez q meu http for interceptado
      multi: true // pode ser que tenha mais de um interceptador, e ele vai delegando pro proximo
    }
]
})
export class CoreModule {}