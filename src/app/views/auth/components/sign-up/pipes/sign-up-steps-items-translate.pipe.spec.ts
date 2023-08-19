import { SignUpStepsItemsTranslatePipe } from './sign-up-steps-items-translate.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';

describe(SignUpStepsItemsTranslatePipe.name, () => {
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });

    translateService = TestBed.inject(TranslateService);
  });

  it('create an instance', () => {
    const pipe = new SignUpStepsItemsTranslatePipe(translateService);
    expect(pipe).toBeTruthy();
  });
});
