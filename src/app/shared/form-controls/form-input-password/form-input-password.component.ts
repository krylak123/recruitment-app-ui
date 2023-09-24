import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormControlAbstract } from '@shared/form-controls/form-control.abstract';
import { FormInputErrorComponent } from '@shared/form-controls/form-input-error/form-input-error.component';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-form-input-password',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorModule,
    PasswordModule,
    ReactiveFormsModule,
    TranslateModule,
    FormInputErrorComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputPasswordComponent),
      multi: true,
    },
  ],
  templateUrl: './form-input-password.component.html',
  styleUrls: ['./form-input-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputPasswordComponent extends FormControlAbstract {
  @Input() public placeholder = '';
}
