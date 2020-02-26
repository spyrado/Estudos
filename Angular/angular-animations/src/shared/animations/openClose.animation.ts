import { trigger, state, style, transition, animate } from '@angular/animations';

export const openClose = trigger('openClose', [
  state('open', style({
    width: '100%',
    height: '100%',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    width: '80%',
    height: '25%',
    opacity: 0.5,
    backgroundColor: 'green'
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ]),
]);