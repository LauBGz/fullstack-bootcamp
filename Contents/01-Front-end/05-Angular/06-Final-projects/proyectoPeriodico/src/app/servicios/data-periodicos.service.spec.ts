import { TestBed } from '@angular/core/testing';

import { DataPeriodicosService } from './data-periodicos.service';

describe('DataPeriodicosService', () => {
  let service: DataPeriodicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPeriodicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
