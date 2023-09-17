import { FormControl } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';

export interface CreatorQuestionsOpenFormInterface {
  name: FormControl<string>;
  content: FormControl<string>;
  expLevel: FormControl<ExpLevelEnum>;
  timeLimit: FormControl<number>;
  maxPoints: FormControl<number>;
}
