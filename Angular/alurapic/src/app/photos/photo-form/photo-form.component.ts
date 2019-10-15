import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from '../../core/user/user-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    this.photoService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['/user', this.userService.getUserName()])))
      .subscribe(
        (event: HttpEvent<any>) => {
          console.log(event);
          // Se for do tipo UploadProgress, é que ainda está fazendo o upload, enquanto estiver
          // fazendo o upload meu percentDone vai receber  o valor.
          if(event.type === HttpEventType.UploadProgress){
            this.percentDone = Math.round(100 * event.loaded / event.total);
            // quando for response significa que o upload já finalizou, ai eu retorno a mensagem e redireciono
          } else if (event instanceof HttpResponse) {
            this.alertService.success('Upload complete', true);
          }
        },
        (error) => {
          console.error(error);
          this.alertService.success('Upload error!', true);
        }
      );
  }

  handleFile(file: File){
    // Recebo meu arquivo normal
    this.file = file;
    const reader = new FileReader();
    // Fico esperando ele transformar pra base64, quando transformar o this.preview vai receber o valor transformado.
    reader.onload = (event: any) => this.preview = event.target.result;
    // mando transformar pra base64
    reader.readAsDataURL(file);
  }

}
