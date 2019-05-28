import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSimplesComponent } from './formulario-simples.component';

describe('FormularioSimplesComponent', () => {
  let component: FormularioSimplesComponent;
  let fixture: ComponentFixture<FormularioSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
