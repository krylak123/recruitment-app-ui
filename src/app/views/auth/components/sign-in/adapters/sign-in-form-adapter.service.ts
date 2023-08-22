import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { SignInForm } from '../models/sign-in-form.interface';

@Injectable()
export class SignInFormAdapterService {
  constructor(private fb: NonNullableFormBuilder) {}

  public createForm(): FormGroup<SignInForm> {
    return this.fb.group<SignInForm>({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }
}
