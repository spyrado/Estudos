import { NegociacaoController } from './controllers/NegociacaoController';

const CONTROLLER = new NegociacaoController();
//Usando jquery
$('.form').submit(CONTROLLER.adiciona.bind(CONTROLLER));

