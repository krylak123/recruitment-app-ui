import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { APP_NAME } from '@shared/constants';
import { FormInputPasswordComponent, FormInputTextComponent } from '@shared/form-controls';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';

import { SignUpFormConsent, signUpFormConsents } from '../../configs/sign-up-form-consents.config';
import { SignUpForm } from '../../models/sign-up-form.interface';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    LetDirective,
    MessageModule,
    PasswordModule,
    ReactiveFormsModule,
    TooltipModule,
    TranslateModule,
    FormInputTextComponent,
    FormInputPasswordComponent,
    CheckboxModule,
    TranslateModule,
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent {
  @Input({ required: true }) public form!: FormGroup<SignUpForm>;
  @Input({ required: true }) public activeStepsIdx!: number;
  public readonly consents: SignUpFormConsent[] = signUpFormConsents;
  public readonly appName: string = APP_NAME;
}
