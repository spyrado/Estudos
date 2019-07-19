import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="nicolas-content">
      <h2>Nicolas Here</h2>
      <p>Conteudo do nicolas</p>
    </div>
  `
})
export class NicolasComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
