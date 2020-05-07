import { TestBed } from '@angular/core/testing';

import { StoredDataService } from './stored-data.service';

describe('StoredDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoredDataService = TestBed.get(StoredDataService);
    expect(service).toBeTruthy();
  });
});
