import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPayloadInterface } from '@backend/auth/models';
import { AppState } from '@core/store/app.reducer';
import { AuthActions, selectAuthCallState } from '@core/store/auth';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { APP_NAME } from '@shared/constants/app-name.constants';
import { FormInputPasswordComponent, FormInputTextComponent } from '@shared/form-controls';
import { CallState, LoadingState } from '@shared/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';
import { Observable } from 'rxjs';

import { SignInFormAdapterService } from './adapters/sign-in-form-adapter.service';
import { SignInFormValues } from './models/sign-in-form-values.interface';
import { SignInForm } from './models/sign-in-form.interface';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TranslateModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    TooltipModule,
    MessageModule,
    DividerModule,
    MessageModule,
    FormInputTextComponent,
    FormInputPasswordComponent,
  ],
  providers: [SignInFormAdapterService],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  public readonly appName: string = APP_NAME;
  public readonly loadingState = LoadingState;
  public form!: FormGroup<SignInForm>;
  public loginCallState$!: Observable<CallState>;

  constructor(
    private formAdapter: SignInFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.setUpProperties();
  }

  public handleRegisterRouting(): void {
    this.router.navigate(['../signup'], { relativeTo: this.aRoute }).then();
  }

  public handleSubmitForm(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const payload: LoginPayloadInterface = this.form.value as SignInFormValues;

    this.store.dispatch(AuthActions.login({ payload }));
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createForm();

    this.loginCallState$ = this.store.select(selectAuthCallState);
  }
}
