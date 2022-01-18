import { TestBed } from '@angular/core/testing';

import { GetEnvVarsService } from './get-env-vars.service';

describe('GetEnvVarsService', () => {
  let service: GetEnvVarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEnvVarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
