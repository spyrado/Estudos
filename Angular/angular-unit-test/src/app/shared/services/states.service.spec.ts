import { TestBed, async } from '@angular/core/testing';

import { StatesService } from './states.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StatesService', () => {

  let statesService: StatesService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        StatesService
      ]
    }).compileComponents();;
  }));

  beforeEach(() => {
    statesService = TestBed.get(StatesService);
  });

  it('should be created', () => {
    expect(statesService).toBeTruthy();
  });

  it('asdasdas', () => {
    const http = TestBed.get(HttpTestingController) as HttpTestingController;
    // http.expectOne()
  });
});
