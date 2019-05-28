import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-simples',
  templateUrl: './formulario-simples.component.html',
  styleUrls: ['./formulario-simples.component.scss']
})
export class FormularioSimplesComponent implements OnInit {

  email = new FormControl('');
  @ViewChild('emailFocus') emailFocus: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit() {
    this.emailFocus.nativeElement.focus();
  }

  updateEmail(){
    this.email.setValue('nicolas.gmop@gmail.com');
  }

}
