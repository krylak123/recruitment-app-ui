import { FormControl } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';

export interface QuestionsOpenFormInterface {
  name: FormControl<string>;
  content: FormControl<string>;
  expLevel: FormControl<ExpLevelEnum>;
  timeLimit: FormControl<number>;
  maxPoints: FormControl<number>;
}
