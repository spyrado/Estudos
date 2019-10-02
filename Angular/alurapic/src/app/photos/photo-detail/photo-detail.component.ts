import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo-comment';
import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from '../../core/user/user-service';

@Component({
  templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {

  public photo$: Observable<Photo>;
  public photoId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => {}, err => this.router.navigate(['not-found']));
  }

  remove() {
    this.photoService
    .removePhoto(this.photoId)
    .subscribe(
      () => {
        this.alertService.success('Photo removed', true);
        this.router.navigate(['user', this.userService.getUserName()]);
      },
      (err) => {
        console.error(err);
        this.alertService.warnning('Could not delete the photo');
      }
    )
  }

  like(photo: Photo) {
    this.photoService
      .like(photo.id)
      .subscribe(liked => {
        if (liked) {
           this.photo$ = this.photoService.findById(photo.id);
        }
      }, err => alert(err));
  }
}
