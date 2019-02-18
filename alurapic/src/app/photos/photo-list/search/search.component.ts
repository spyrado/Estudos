
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {

        this.debounce
          .pipe(debounceTime(400));
      }
    
      ngOnDestroy(): void {
        this.debounce.unsubscribe(); // precisamos fazer isso, pois caso o usuário saia da pagina, o Subject pode ficar alocando memoria, e pode dar erro de memoria futuramente.
      }
}