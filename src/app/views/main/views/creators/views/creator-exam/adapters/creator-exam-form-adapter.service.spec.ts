import { TestBed } from '@angular/core/testing';

import { CreatorExamFormAdapterService } from './creator-exam-form-adapter.service';

describe(CreatorExamFormAdapterService.name, () => {
  let service: CreatorExamFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorExamFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
