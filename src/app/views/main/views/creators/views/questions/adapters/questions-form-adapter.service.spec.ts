import { TestBed } from '@angular/core/testing';

import { QuestionsFormAdapterService } from './questions-form-adapter.service';

describe(QuestionsFormAdapterService.name, () => {
  let service: QuestionsFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsFormAdapterService],
    });
    service = TestBed.inject(QuestionsFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
