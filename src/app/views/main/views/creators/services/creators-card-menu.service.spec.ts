import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CreatorsCardMenuService } from './creators-card-menu.service';

describe(CreatorsCardMenuService.name, () => {
  let service: CreatorsCardMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      providers: [CreatorsCardMenuService],
    });
    service = TestBed.inject(CreatorsCardMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
