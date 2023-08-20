import { Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { SignUpForm } from '@views/auth/components/sign-up/models/sign-up-form.interface';

@Injectable()
export class SignUpFormAdapterService {
  constructor(private fb: NonNullableFormBuilder) {}

  public createForm(): FormGroup<SignUpForm> {
    return this.fb.group<SignUpForm>({
      commonGroup: this.fb.group({
        name: this.fb.control('', [Validators.required]),
        surname: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required]),
      }),
      dataGroup: this.fb.group({
        city: this.fb.control('', [Validators.required]),
        phoneNumber: this.fb.control('', [Validators.required]),
        linkLinkedin: this.fb.control('', [Validators.required]),
        linkGit: this.fb.control('', [Validators.required]),
      }),
    });
  }
}
