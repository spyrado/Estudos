import { Component } from '@angular/core';
import { openClose } from 'src/shared/animations/openClose.animation';
import { heightResize } from 'src/shared/animations/heightResize.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    openClose,
    heightResize
  ]
})
export class AppComponent {
  title = 'angular-animations';
  isOpen = false;
}
