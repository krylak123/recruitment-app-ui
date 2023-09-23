import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_URL } from '@providers';

import { ExamsService } from './exams.service';

describe(ExamsService.name, () => {
  let service: ExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: API_URL, useValue: '' }],
    });
    service = TestBed.inject(ExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
