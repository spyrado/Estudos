import { trigger, state, style, transition, animate, query } from '@angular/animations';

export const openClose = trigger('openClose', [
  state('whatever', style({
    width: '63%',
    height: '76%',
    opacity: 0.5,
    backgroundColor: 'red'
  })),
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
  transition('* => *', [
    animate('0.5s')
  ])
]);