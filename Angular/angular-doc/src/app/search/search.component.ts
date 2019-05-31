import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputSearchSubject = new Subject<string>();
  @Output() onTyping = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

    console.log('%c message', 'color: orange; font-size: 18px;');

    this.inputSearchSubject
      .pipe(debounceTime(300))
      .subscribe(inputValue => this.onTyping.emit(inputValue));
  }

}