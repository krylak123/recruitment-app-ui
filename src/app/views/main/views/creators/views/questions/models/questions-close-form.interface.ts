import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';

export interface QuestionsCloseFormInterface {
  name: FormControl<string>;
  content: FormControl<string>;
  expLevel: FormControl<ExpLevelEnum>;
  timeLimit: FormControl<number>;
  maxPoints: FormControl<number>;
  answers: FormArray<FormGroup<QuestionsCloseFormAnswersInterface>>;
}

export interface QuestionsCloseFormAnswersInterface {
  content: FormControl<string>;
  isCorrect: FormControl<boolean>;
}
