import { NegociacaoController } from './controllers/NegociacaoController';

const CONTROLLER = new NegociacaoController();
//Usando jquery
$('.form').submit(CONTROLLER.adiciona.bind(CONTROLLER));
$('#botao-importa').click(CONTROLLER.importaDados.bind(CONTROLLER));

