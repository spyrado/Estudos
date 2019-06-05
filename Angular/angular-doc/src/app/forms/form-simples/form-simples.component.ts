import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-simples',
  templateUrl: './form-simples.component.html',
  styleUrls: ['form-simples.component.scss']
})
export class FormSimplesComponent implements OnInit {


  showSpinner: boolean = false;
  showWasted: boolean = false;
  mensagem: string;
  @Output() textoTitulo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    //Emito um valor para que o titulo mude de Angular Doc, para Angular Login
    this.textoTitulo.emit('Login');
  }

  animaBotao(event){
    //Configurações iniciais
    event.preventDefault();
    this.mensagem = "";
    let listaDeClasses = event.target.classList;
    listaDeClasses.add('btn-login-animate');
    this.showSpinner = true;
    //Inicio de fato a animação
    this.iniciaAnimacao(listaDeClasses);
  }

  iniciaAnimacao(listaDeClasses){
    setTimeout(() => listaDeClasses.add('hinge','animated'), 300);
    setTimeout(() => {
      this.showSpinner = false;
      listaDeClasses.remove('hinge','animated','btn-login-animate');
      this.mensagem = "You are not human";
    }, 2300);
    setTimeout(() => this.showWasted = true, 2600);
  }
}