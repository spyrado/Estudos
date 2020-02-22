import { TestBed, async } from '@angular/core/testing';

import { StatesService } from './states.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Estados } from './shared/interface/estados';
import { ESTADOS_MOCK_RESPONSE } from './shared/__mocks__/unit-test/estados-response.mock';

describe('StatesService', () => {

  let statesService: StatesService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        StatesService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    statesService = TestBed.get(StatesService);
    http = TestBed.get(HttpTestingController) as HttpTestingController;
  });

  it('should be created', () => {
    expect(statesService).toBeTruthy();
  });

  it('should call the api', () => {
    const mockResponseApi: Estados[] = ESTADOS_MOCK_RESPONSE;
    statesService.getStates().subscribe((data: any) => {
      expect(data).toEqual(mockResponseApi);
    });

    const req = http.expectOne('https://servicodados.ibge.gov.br/api/v1/localidades/distritos') as any;

    expect(req.request.method).toBe('GET');

    req.flush(mockResponseApi);
  });

  afterEach(() => {
    http.verify();
  });
});
