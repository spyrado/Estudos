import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{
  
  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => 
      this.fromUrl = params['fromUrl']
    );
    // Se a primeira condicao for true, ele executa a segunda.
    this.platformDetectorService.isPlatformBrowser() && 
    this.userNameInput.nativeElement.focus();
    
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName,password)
      .subscribe(
        () => 
          this.fromUrl
            ? this.router.navigateByUrl(this.fromUrl)
            : this.router.navigate(['user/',userName])
        ,
        err => {
          console.log(err);
          this.loginForm.reset();
          // Se a primeira condicao for true, ele executa a segunda.
          this.platformDetectorService.isPlatformBrowser() && 
            this.userNameInput.nativeElement.focus();
            
          alert('Invalid user name or password');
        }
      )
  }

}