import { FormControl, FormGroup } from '@angular/forms';

export interface SignUpForm {
  commonGroup: FormGroup<SignUpFormCommonGroup>;
  dataGroup: FormGroup<SignUpFormDataGroup>;
}

export interface SignUpFormCommonGroup {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface SignUpFormDataGroup {
  city: FormControl<string>;
  phoneNumber: FormControl<string>;
  linkLinkedin: FormControl<string>;
  linkGit: FormControl<string>;
}
