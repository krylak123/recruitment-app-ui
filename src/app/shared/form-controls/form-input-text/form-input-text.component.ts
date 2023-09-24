import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormControlAbstract } from '@shared/form-controls/form-control.abstract';
import { TrimDirective } from '@shared/utils';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { FormInputErrorComponent } from '../form-input-error/form-input-error.component';

@Component({
  selector: 'app-form-input-text',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    TranslateModule,
    FormsModule,
    PasswordModule,
    FormInputErrorComponent,
    TrimDirective,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputTextComponent),
      multi: true,
    },
  ],
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputTextComponent extends FormControlAbstract {
  @Input() public placeholder = '';
  @Input() public maxLength?: number;
}
