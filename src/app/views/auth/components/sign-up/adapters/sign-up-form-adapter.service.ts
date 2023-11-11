import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { SignUpForm } from '../models/sign-up-form.interface';

@Injectable()
export class SignUpFormAdapterService {
  constructor(private fb: NonNullableFormBuilder) {}

  public createForm(): FormGroup<SignUpForm> {
    return this.fb.group<SignUpForm>({
      commonGroup: this.fb.group({
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required]),
      }),
      dataGroup: this.fb.group({
        phone: this.fb.control('', [Validators.required]),
        gitRepoLink: this.fb.control('', [Validators.required]),
      }),
      consentsGroup: this.fb.group({
        acceptedRodo: this.fb.control<boolean[]>([], [Validators.required]),
      }),
    });
  }
}
