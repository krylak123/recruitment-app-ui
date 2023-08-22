import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { SignUpForm } from '@views/auth/components/sign-up/models/sign-up-form.interface';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';

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
