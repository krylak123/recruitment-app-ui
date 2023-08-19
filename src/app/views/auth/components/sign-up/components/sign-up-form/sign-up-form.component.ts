import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LetDirective } from '@ngrx/component';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { SignUpForm } from '@views/auth/components/sign-up/models/sign-up-form.interface';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateModule } from '@ngx-translate/core';

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
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent {
  @Input({ required: true }) public form!: FormGroup<SignUpForm>;
  @Input({ required: true }) public activeStepsIdx!: number;
}
