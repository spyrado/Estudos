import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-mock-api';
  users$: Observable<any>;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    this.users$.subscribe(users => console.log(users));
  }
}
