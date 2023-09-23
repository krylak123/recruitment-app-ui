import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  QUESTION_CONTENT_MAX_LENGTH,
  QUESTION_NAME_MAX_LENGTH,
  QUESTION_POINTS_MAX,
  QUESTION_POINTS_MIN,
  QUESTION_TIME_MAX,
  QUESTION_TIME_MIN,
} from '@shared/constants';
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
      name: this.fb.control('', [Validators.required, Validators.maxLength(QUESTION_NAME_MAX_LENGTH)]),
      content: this.fb.control('', [Validators.required, Validators.maxLength(QUESTION_CONTENT_MAX_LENGTH)]),
      expLevel: this.fb.control(ExpLevelEnum.ENTRY, [Validators.required]),
      timeLimit: this.fb.control(QUESTION_TIME_MIN, [
        Validators.required,
        Validators.min(QUESTION_TIME_MIN),
        Validators.max(QUESTION_TIME_MAX),
      ]),
      maxPoints: this.fb.control(QUESTION_POINTS_MIN, [
        Validators.required,
        Validators.min(QUESTION_POINTS_MIN),
        Validators.max(QUESTION_POINTS_MAX),
      ]),
    });
  }

  public createCloseQuestionForm(): FormGroup<CreatorQuestionsCloseFormInterface> {
    return this.fb.group<CreatorQuestionsCloseFormInterface>({
      name: this.fb.control('', [Validators.required, Validators.maxLength(QUESTION_NAME_MAX_LENGTH)]),
      content: this.fb.control('', [Validators.required, Validators.maxLength(QUESTION_CONTENT_MAX_LENGTH)]),
      expLevel: this.fb.control(ExpLevelEnum.ENTRY, [Validators.required]),
      timeLimit: this.fb.control(QUESTION_TIME_MIN, [
        Validators.required,
        Validators.min(QUESTION_TIME_MIN),
        Validators.max(QUESTION_TIME_MAX),
      ]),
      maxPoints: this.fb.control(QUESTION_POINTS_MIN, [
        Validators.required,
        Validators.min(QUESTION_POINTS_MIN),
        Validators.max(QUESTION_POINTS_MAX),
      ]),
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
