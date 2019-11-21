import { map } from 'rxjs/operators';
import { LoadingType } from './loading-type';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ap-loading',
  templateUrl: './loading-component.html'
})
export class LoadingComponent implements OnInit {

  loading$: Observable<string>

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService
      .getLoading()
      .pipe(map(loadingType => loadingType.valueOf()));
  }
}