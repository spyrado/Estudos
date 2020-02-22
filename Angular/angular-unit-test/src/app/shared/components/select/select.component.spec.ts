import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StatesService } from '../../services/states.service';
import { ESTADOS_MOCK_RESPONSE } from '../../services/shared/__mocks__/unit-test/estados-response.mock';
import { Observable, Observer } from 'rxjs';
import { Estados } from '../../services/shared/interface/estados';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let statesService: StatesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        StatesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    statesService = fixture.debugElement.injector.get(StatesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify async method', fakeAsync(() => {
    const mockStates = ESTADOS_MOCK_RESPONSE;
    
    spyOn(statesService, 'getStates').and.returnValue(
      Observable.create(
        (observer: Observer<Estados[]>) => {
          observer.next(mockStates);
          return observer;
        }
      )
    );

    tick();
    
    fixture.detectChanges();
  }));

  it('should verify error method', fakeAsync(() => {
    const mockStates = ESTADOS_MOCK_RESPONSE;
    
    spyOn(statesService, 'getStates').and.returnValue(
      Observable.create(
        (observer: Observer<Estados[]>) => 
          observer.error('Algo de errado aconteceu')
      )
    );

    tick();
    
    fixture.detectChanges();
  }));
});
