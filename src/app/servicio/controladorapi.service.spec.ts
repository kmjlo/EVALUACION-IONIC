import { TestBed } from '@angular/core/testing';

import { ControladorapiService } from './controladorapi.service';

describe('ControladorapiService', () => {
  let service: ControladorapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
