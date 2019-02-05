import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
    selector: 'ap-photos',
    templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnChanges{

    @Input() photos: Photo[] = [];
    rows: any[] = [];

    constructor() { }

    ngOnChanges(changes: SimpleChanges){
        if(changes.photos)
            this.rows = this.groupColumns(this.photos);
    }

    groupColumns(photos: Photo[]){

        const newRows = []
            ,numCols: number = 3; // numero de colunas
        
        for(let index = 0; index < photos.length; index+=numCols){
            // acrescenta no vetor tres valores dentro do vetor newRows, ficando assim
            /*
                [
                    [0,1,2],
                    [0,1,2],
                    [0,1,2]
                ]
            */
            newRows.push(photos.slice(index, index + numCols)); // esse slice retorna um vetor do index inicial até o definido.
        }
        return newRows;
    }
}