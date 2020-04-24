import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.http.get('http://localhost:3000/people');
  }

  addUser() {
    const user = {
      name: 'tanto faz sem headers'
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/people', user)
      .subscribe(res => console.log(res));

    this.getUsers();
  }
}
