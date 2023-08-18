import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_NAME } from '@shared/constants/app-name.constants';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInForm } from '@views/auth/components/sign-in/models/sign-in-form.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { SharedModule } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';

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
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  public readonly appName: string = APP_NAME;
  public form!: FormGroup<SignInForm>;

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute
  ) {}

  public handleLoginRouting(): void {
    this.router.navigate(['../signin'], { relativeTo: this.aRoute }).then();
  }

  public handleSubmitForm(): void {
    console.log('submit');
  }
}
