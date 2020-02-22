import { Component, OnInit } from '@angular/core';
import { StatesService } from '../../services/states.service';
import { Estados } from '../../services/shared/interface/estados';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  states: Estados[];

  constructor(private statesService: StatesService) { }

  ngOnInit() {
    this.statesService.get()
      .subscribe((res) => {
        this.states = res.splice(0,5);
        console.log(this.states);
      });
  }

}
