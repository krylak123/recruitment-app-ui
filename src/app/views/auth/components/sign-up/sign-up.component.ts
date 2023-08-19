import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_NAME } from '@shared/constants/app-name.constants';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { MenuItem, SharedModule } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';
import { signUpStepsItems } from '@views/auth/components/sign-up/configs/sign-up-form-steps.config';
import { StepsModule } from 'primeng/steps';
import { DividerModule } from 'primeng/divider';
import { SignUpForm } from '@views/auth/components/sign-up/models/sign-up-form.interface';
import { SignUpFormAdapterService } from '@views/auth/components/sign-up/adapters/sign-up-form-adapter.service';
import { LetDirective } from '@ngrx/component';
import { SignInFormValues } from '@views/auth/components/sign-in/models/sign-in-form-values.interface';
import { SignUpStepsItemsTranslatePipe } from '@views/auth/components/sign-up/pipes/sign-up-steps-items-translate.pipe';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    MessageModule,
    PasswordModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    StepsModule,
    DividerModule,
    LetDirective,
    SignUpStepsItemsTranslatePipe,
  ],
  providers: [SignUpFormAdapterService],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public readonly appName: string = APP_NAME;
  public readonly stepsItems: MenuItem[] = signUpStepsItems;
  public form!: FormGroup<SignUpForm>;
  public activeStepsIdx!: number;

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private formAdapter: SignUpFormAdapterService
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();

    this.form.valueChanges.subscribe(console.log);
  }

  public onActiveIdxChange(idx: number): void {
    this.activeStepsIdx = idx;
  }

  public handleLoginRouting(): void {
    this.router.navigate(['../signin'], { relativeTo: this.aRoute }).then();
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    // TODO: podmienić na właściwy payload interface
    const payload: unknown = this.form.value as SignInFormValues;

    console.log(payload);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createForm();

    this.activeStepsIdx = 0;
  }
}
