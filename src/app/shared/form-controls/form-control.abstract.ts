/* eslint-disable @typescript-eslint/no-empty-function  */

/* eslint-disable @typescript-eslint/no-explicit-any  */
import { Directive, Injector, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
} from '@angular/forms';

@Directive()
export class FormControlAbstract implements ControlValueAccessor, OnInit {
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
