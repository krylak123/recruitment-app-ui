import { TestBed } from '@angular/core/testing';

import { CreatorsCardMenuService } from './creators-card-menu.service';

describe('CreatorsCardMenuService', () => {
  let service: CreatorsCardMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorsCardMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
