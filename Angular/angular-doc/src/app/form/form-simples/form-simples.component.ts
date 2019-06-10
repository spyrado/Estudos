import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-simples',
  templateUrl: './form-simples.component.html',
  styleUrls: ['form-simples.component.scss']
})
export class FormSimplesComponent implements OnInit {


  showSpinner: boolean = false;
  showWasted: boolean = false;
  mensagem: string;

  // use o construtor de FormControl para definir um valor inicial ao input
  username = new FormControl('Formulario Simples');
  password = new FormControl('ChumbandoTexto');

  constructor() { }

  ngOnInit(): void {
  }

  animaBotao(event){
    //Configurações iniciais
    event.preventDefault();
    this.mensagem = "";
    let listaDeClasses = event.target.classList;
    //Jogo o botão de login pro lado
    listaDeClasses.add('btn-login-animate');
    //Exibo o spinner ao lado do botão de login
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