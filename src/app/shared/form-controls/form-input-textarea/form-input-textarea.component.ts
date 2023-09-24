import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormControlAbstract } from '@shared/form-controls/form-control.abstract';
import { FormInputErrorComponent } from '@shared/form-controls/form-input-error/form-input-error.component';
import { TrimDirective } from '@shared/utils';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-form-input-textarea',
  standalone: true,
  imports: [
    CommonModule,
    InputTextareaModule,
    PaginatorModule,
    ReactiveFormsModule,
    TranslateModule,
    FormInputErrorComponent,
    TrimDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputTextareaComponent),
      multi: true,
    },
  ],
  templateUrl: './form-input-textarea.component.html',
  styleUrls: ['./form-input-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputTextareaComponent extends FormControlAbstract {
  @Input() public placeholder = '';
  @Input() public hintVisible = false;
  @Input() public maxLength?: number;
  @Input() public rows = 5;
}
