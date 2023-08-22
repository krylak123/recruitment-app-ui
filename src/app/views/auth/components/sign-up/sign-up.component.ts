import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { APP_NAME } from '@shared/constants/app-name.constants';
import { MenuItem, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { StepsModule } from 'primeng/steps';

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

    if (this.form.invalid) return;

    // TODO: podmienić na właściwy payload interface
    const payload: unknown = this.form.value as SignUpFormValues;

    console.log(payload);
  }

  private setUpProperties(): void {
    this.form = this.formAdapter.createForm();

    this.activeStepsIdx = 0;
  }
}
