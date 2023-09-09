import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';
import {
  QuestionsCloseFormAnswersInterface,
  QuestionsCloseFormInterface,
} from '@views/main/views/creators/views/questions/models/questions-close-form.interface';

import { QuestionsOpenFormInterface } from '../models/questions-open-form.interface';

@Injectable()
export class QuestionsFormAdapterService {
  constructor(private fb: NonNullableFormBuilder) {}

  public createOpenQuestionForm(): FormGroup<QuestionsOpenFormInterface> {
    return this.fb.group<QuestionsOpenFormInterface>({
      name: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      content: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
      expLevel: this.fb.control(ExpLevelEnum.ENTRY, [Validators.required]),
      timeLimit: this.fb.control(10, [Validators.required, Validators.min(10), Validators.max(600)]),
      maxPoints: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(10)]),
    });
  }

  public createCloseQuestionForm(): FormGroup<QuestionsCloseFormInterface> {
    return this.fb.group<QuestionsCloseFormInterface>({
      name: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      content: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
      expLevel: this.fb.control(ExpLevelEnum.ENTRY, [Validators.required]),
      timeLimit: this.fb.control(10, [Validators.required, Validators.min(10), Validators.max(600)]),
      maxPoints: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(10)]),
      answers: this.fb.array<FormGroup<QuestionsCloseFormAnswersInterface>>([
        this.createCloseQuestionAnswerForm(),
        this.createCloseQuestionAnswerForm(),
      ]),
    });
  }

  public createCloseQuestionAnswerForm(): FormGroup<QuestionsCloseFormAnswersInterface> {
    return this.fb.group<QuestionsCloseFormAnswersInterface>({
      content: this.fb.control('', [Validators.required]),
      isCorrect: this.fb.control(false, [Validators.required]),
    });
  }
}
