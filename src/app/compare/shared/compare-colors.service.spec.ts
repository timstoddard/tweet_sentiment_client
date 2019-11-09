import { TestBed } from '@angular/core/testing';

import { CompareColorsService } from './compare-colors.service';

describe('CompareColorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompareColorsService = TestBed.get(CompareColorsService);
    expect(service).toBeTruthy();
  });
});
