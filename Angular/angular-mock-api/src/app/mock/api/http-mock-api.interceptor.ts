import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { default as mockEndpoints } from './mock-api.config';

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    const currentMockEndpoint = mockEndpoints[req.method] && mockEndpoints[req.method][req.url] || null;
    console.log(req);
    return currentMockEndpoint ? currentMockEndpoint.handler() : next.handle(req);
  }

}