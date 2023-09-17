import { Injectable } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';

import { CreatorExamFormInterface } from '../models/creator-exam-form.interface';

@Injectable()
export class CreatorExamFormAdapterService {
  constructor(private fb: NonNullableFormBuilder) {}

  public createForm(): FormGroup<CreatorExamFormInterface> {
    return this.fb.group<CreatorExamFormInterface>({
      name: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      expLevel: this.fb.control(ExpLevelEnum.ENTRY, [Validators.required]),
    });
  }

  public createSearchQuestionCloseFormControl(): FormControl<string> {
    return this.fb.control('');
  }

  public createSearchQuestionOpenFormControl(): FormControl<string> {
    return this.fb.control('');
  }
}
