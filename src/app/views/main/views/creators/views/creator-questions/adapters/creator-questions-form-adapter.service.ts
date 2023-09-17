import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';

import {
  CreatorQuestionsCloseFormAnswersInterface,
  CreatorQuestionsCloseFormInterface,
} from '../models/creator-questions-close-form.interface';
import { CreatorQuestionsOpenFormInterface } from '../models/creator-questions-open-form.interface';

@Injectable()
export class CreatorQuestionsFormAdapterService {
  constructor(private fb: NonNullableFormBuilder) {}

  public createOpenQuestionForm(): FormGroup<CreatorQuestionsOpenFormInterface> {
    return this.fb.group<CreatorQuestionsOpenFormInterface>({
      name: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      content: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
      expLevel: this.fb.control(ExpLevelEnum.ENTRY, [Validators.required]),
      timeLimit: this.fb.control(10, [Validators.required, Validators.min(10), Validators.max(600)]),
      maxPoints: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(10)]),
    });
  }

  public createCloseQuestionForm(): FormGroup<CreatorQuestionsCloseFormInterface> {
    return this.fb.group<CreatorQuestionsCloseFormInterface>({
      name: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      content: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
      expLevel: this.fb.control(ExpLevelEnum.ENTRY, [Validators.required]),
      timeLimit: this.fb.control(10, [Validators.required, Validators.min(10), Validators.max(600)]),
      maxPoints: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(10)]),
      answers: this.fb.array<FormGroup<CreatorQuestionsCloseFormAnswersInterface>>([
        this.createCloseQuestionAnswerForm(),
        this.createCloseQuestionAnswerForm(),
      ]),
    });
  }

  public createCloseQuestionAnswerForm(): FormGroup<CreatorQuestionsCloseFormAnswersInterface> {
    return this.fb.group<CreatorQuestionsCloseFormAnswersInterface>({
      content: this.fb.control('', [Validators.required]),
      isCorrect: this.fb.control(false, [Validators.required]),
    });
  }
}
