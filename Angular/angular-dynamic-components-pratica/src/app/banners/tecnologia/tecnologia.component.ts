import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="tecnologia-content">
      <h2>Tecnologia Here</h2>
      <p>Conteudo do tecnologia</p>
    </div>
  `
})
export class TecnologiaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
