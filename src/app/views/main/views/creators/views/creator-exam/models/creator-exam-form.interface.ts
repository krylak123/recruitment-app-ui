import { FormControl } from '@angular/forms';
import { ExpLevelEnum } from '@shared/enums';

export interface CreatorExamFormInterface {
  name: FormControl<string>;
  description: FormControl<string>;
  expLevel: FormControl<ExpLevelEnum>;
}
