import { TestBed } from '@angular/core/testing';

import { CaluclateServiceService } from './caluclate-service.service';

describe('CaluclateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaluclateServiceService = TestBed.get(CaluclateServiceService);
    expect(service).toBeTruthy();
  });
});
