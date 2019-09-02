import { Component, OnInit } from '@angular/core';
import { TableData } from '../data/table.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  public title = {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    idade: 'idade',
    action: 'action'
  };

  public users = TableData;
  private columnName = '';

  constructor() { }

  ngOnInit() {
  }

  sortable(tableName: string) {
    debugger;
    if (tableName === this.columnName) {
      this.users = this.users.reverse();
    } else {
      this.users = this.users.sort((a, b) => a[tableName] - b[tableName]);
    }
    this.columnName = tableName;
  }

}
