import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FormInputErrorPipe } from './form-input-error.pipe';

@Component({
  selector: 'app-form-input-error',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormInputErrorPipe],
  templateUrl: './form-input-error.component.html',
  styleUrls: ['./form-input-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputErrorComponent {
  @Input({ required: true }) public errors!: ValidationErrors | null;
}
