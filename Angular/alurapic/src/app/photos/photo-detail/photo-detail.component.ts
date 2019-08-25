import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';

@Component({
  templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {

  public photo$: Observable<Photo>;
  public photoId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }
}
