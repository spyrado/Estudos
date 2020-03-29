import { TestBed } from '@angular/core/testing';

import { NgmService } from './ngm.service';

describe('NgmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgmService = TestBed.get(NgmService);
    expect(service).toBeTruthy();
  });
});
