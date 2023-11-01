import { TestBed } from '@angular/core/testing';

import { EmployeeFormAdapterService } from './employee-form-adapter.service';

describe(EmployeeFormAdapterService.name, () => {
  let service: EmployeeFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeFormAdapterService],
    });
    service = TestBed.inject(EmployeeFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
