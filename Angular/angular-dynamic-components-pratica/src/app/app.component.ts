import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-banner></app-banner>
  `,
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
