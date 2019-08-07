import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
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
    console.log(description);
    console.log(allowComments);
    console.log(this.file);
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(
        () => this.router.navigate(['']),
        (error) => console.error(error)
      );
  }

  handleFile(file: File){
    console.log(file);
    // Recebo meu arquivo normal
    this.file = file;
    const reader = new FileReader();
    // Fico esperando ele transformar pra base64, quando transformar o this.preview vai receber o valor transformado.
    reader.onload = (event: any) => this.preview = event.target.result;
    // mando transformar pra base64
    reader.readAsDataURL(file);
  }

}
