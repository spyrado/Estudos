import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_PEOPLE = 'http://localhost:3000/people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-mock-api';
  users: any[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get<any[]>('http://localhost:3000/people')
      .subscribe(users => this.users = users);
  }

  postUser() {
    const user = {
      name: 'Nicolas',
      sobrenome: 'Guilherme',
      idade: 24
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/people', user)
      .subscribe(res => this.getUsers());
  }

  patchUser() {
    this.http.patch(`http://localhost:3000/people/${1}`, {
      name: 'Ibira'
    })
      .subscribe(res => this.getUsers());
  }

  putUser() {
    this.http.put(`http://localhost:3000/people/${1}`,{
      name: 'nicolas',
      sobrenome: 'guilherme',
      idade: 25
    })
      .subscribe(res => this.getUsers());
  }

  removeLastUser() {
    const lastUser = this.users[this.users.length - 1];
    console.log(lastUser);
    this.http.delete(`http://localhost:3000/people/${lastUser.id}`)
      .subscribe(res => this.getUsers());
  }
}
