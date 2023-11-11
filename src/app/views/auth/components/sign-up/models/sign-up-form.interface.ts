import { FormControl, FormGroup } from '@angular/forms';

export interface SignUpForm {
  commonGroup: FormGroup<SignUpFormCommonGroup>;
  dataGroup: FormGroup<SignUpFormDataGroup>;
  consentsGroup: FormGroup<SignUpFormConsentsGroup>;
}

export interface SignUpFormCommonGroup {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface SignUpFormDataGroup {
  phone: FormControl<string>;
  gitRepoLink: FormControl<string>;
}

export interface SignUpFormConsentsGroup {
  acceptedRodo: FormControl<boolean[]>;
}
