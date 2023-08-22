import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TitleService } from './title.service';

describe(TitleService.name, () => {
  let service: TitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });
    service = TestBed.inject(TitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
