import { LoginService } from '../login.service';
import { TestBed } from '@angular/core/testing';

describe('LoginService', () => {

  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ LoginService ] });
    loginService = TestBed.get(LoginService);
  });

  it('Deve retonar TRUE caso Usuário E senha VÁLIDOS', () => {
    expect(loginService.auth('nicolas',123)).toBeTruthy();
  });

  it('Deve retonar FALSE caso Usuário OU senha INVÁLIDOS', () => {
    expect(loginService.auth('nicolas2',123)).toBeFalsy();
  });

});