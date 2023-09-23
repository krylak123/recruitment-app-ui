import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';

export interface CreatorQuestionsCloseFormInterface {
  name: FormControl<string>;
  content: FormControl<string>;
  expLevel: FormControl<ExpLevelEnum>;
  timeLimit: FormControl<number>;
  maxPoints: FormControl<number>;
  answers: FormArray<FormGroup<CreatorQuestionsCloseFormAnswersInterface>>;
}

export interface CreatorQuestionsCloseFormAnswersInterface {
  content: FormControl<string>;
  isCorrect: FormControl<boolean>;
}
