import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterPayloadInterface } from '@backend/auth/models';
import { ToastService } from '@core/services';
import { AppState } from '@core/store/app.reducer';
import { AuthActions, selectAuthCallState } from '@core/store/auth';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { APP_NAME } from '@shared/constants/app-name.constants';
import { CallState, LoadingState } from '@shared/store';
import { MenuItem, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { StepsModule } from 'primeng/steps';
import { Observable, filter, tap } from 'rxjs';

import { SignUpFormAdapterService } from './adapters/sign-up-form-adapter.service';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { signUpStepsItems } from './configs/sign-up-form-steps.config';
import { SignUpFormValues } from './models/sign-up-form-values.interface';
import { SignUpForm } from './models/sign-up-form.interface';
import { SignUpStepsItemsTranslatePipe } from './pipes/sign-up-steps-items-translate.pipe';

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
    SignUpFormComponent,
  ],
  providers: [SignUpFormAdapterService],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public readonly appName: string = APP_NAME;
  public readonly stepsItems: MenuItem[] = signUpStepsItems;
  public readonly loadingState = LoadingState;
  public form!: FormGroup<SignUpForm>;
  public activeStepsIdx!: number;
  public loginCallState$!: Observable<CallState>;

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private formAdapter: SignUpFormAdapterService,
    private toastService: ToastService,
    private store: Store<AppState>,
    private destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
    this.setUpDataFlow();
  }

  public onActiveIdxChange(idx: number): void {
    this.activeStepsIdx = idx;
  }

  public handleBackwardFormBtn(): void {
    if (!this.activeStepsIdx) return;

    this.activeStepsIdx--;
  }

  public handleNextFormBtn(): void {
    this.activeStepsIdx++;
  }

  public handleLoginRouting(): void {
    this.router.navigate(['../signin'], { relativeTo: this.aRoute }).then();
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return this.toastService.triggerWarnToast('FORM.FILL_FIELD');
    }

    const payload: RegisterPayloadInterface = this.formatFormValues(this.form.getRawValue());

    this.store.dispatch(AuthActions.register({ payload }));
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createForm();
    this.loginCallState$ = this.store.select(selectAuthCallState);

    this.activeStepsIdx = 0;
  }

  private setUpDataFlow(): void {
    this.loginCallState$
      .pipe(
        filter(status => status === LoadingState.LOADED),
        tap(() => this.router.navigate(['main']).then()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private formatFormValues(values: SignUpFormValues): RegisterPayloadInterface {
    const { firstName, lastName, email, password } = values.commonGroup;
    const { phone, gitRepoLink } = values.dataGroup;
    const { acceptedRodo } = values.consentsGroup;

    return {
      commonGroup: {
        firstName,
        lastName,
        email,
        password,
        phone,
      },
      additionalGroup: {
        gitRepoLink,
      },
      consentsGroup: {
        acceptedRodo: acceptedRodo[0],
      },
    };
  }
}
