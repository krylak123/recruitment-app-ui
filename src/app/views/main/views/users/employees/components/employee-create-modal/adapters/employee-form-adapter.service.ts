import { Injectable } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { DEFAULT_PASSWORD } from '@shared/constants';

export interface EmployeeFormInterface {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  phone: FormControl<string>;
}

@Injectable()
export class EmployeeFormAdapterService {
  constructor(private fb: NonNullableFormBuilder) {}

  public createForm(): FormGroup<EmployeeFormInterface> {
    return this.fb.group<EmployeeFormInterface>({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control(DEFAULT_PASSWORD, [Validators.required]),
      phone: this.fb.control('', [Validators.required]),
    });
  }
}
