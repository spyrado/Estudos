import { TestBed } from '@angular/core/testing';
import { LoginService } from '../login.service';

describe('LoginComponent', () => {
  
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ LoginService ] });
    loginService = TestBed.get(LoginService);
  });

  it('Deve enviar os dados do login', () => {
    
  });
});