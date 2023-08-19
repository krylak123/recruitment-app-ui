import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_NAME } from '@shared/constants/app-name.constants';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { SignInFormAdapterService } from '@views/auth/components/sign-in/adapters/sign-in-form-adapter.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInForm } from '@views/auth/components/sign-in/models/sign-in-form.interface';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute, Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { MessageModule } from 'primeng/message';
import { SignInFormValues } from '@views/auth/components/sign-in/models/sign-in-form-values.interface';
import { DividerModule } from 'primeng/divider';

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
  ],
  providers: [SignInFormAdapterService],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  public readonly appName: string = APP_NAME;
  public form!: FormGroup<SignInForm>;

  constructor(
    private formAdapter: SignInFormAdapterService,
    private router: Router,
    private aRoute: ActivatedRoute
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

    // TODO: podmienić na właściwy payload interface
    const payload: unknown = this.form.value as SignInFormValues;

    console.log(payload);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createForm();
  }
}
