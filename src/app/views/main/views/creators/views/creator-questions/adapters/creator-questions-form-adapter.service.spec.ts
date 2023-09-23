import { TestBed } from '@angular/core/testing';

import { CreatorQuestionsFormAdapterService } from './creator-questions-form-adapter.service';

describe(CreatorQuestionsFormAdapterService.name, () => {
  let service: CreatorQuestionsFormAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatorQuestionsFormAdapterService],
    });
    service = TestBed.inject(CreatorQuestionsFormAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
