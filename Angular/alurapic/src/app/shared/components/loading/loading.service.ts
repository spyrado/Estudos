import { LoadingType } from './loading-type';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject = new Subject<LoadingType>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED)); // ja retorno o observable com o valor stopped
  }

  start() {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}