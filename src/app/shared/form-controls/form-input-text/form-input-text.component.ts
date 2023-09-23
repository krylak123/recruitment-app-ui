/* eslint-disable @typescript-eslint/no-empty-function  */

/* eslint-disable @typescript-eslint/no-explicit-any  */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injector, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
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
export class FormInputTextComponent implements ControlValueAccessor, OnInit {
  @Input() public placeholder = '';
  @Input() public hintVisible = false;
  @Input() public maxLength?: number;
  public formControl!: FormControl<string>;
  public value!: string;

  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor(public injector: Injector) {}

  public ngOnInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl);

    if (ngControl instanceof FormControlName) {
      this.formControl = this.injector.get(FormGroupDirective).getControl(ngControl);
    } else {
      this.formControl = (ngControl as FormControlDirective).form as FormControl;
    }
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
