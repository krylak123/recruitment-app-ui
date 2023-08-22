import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrim]',
  standalone: true,
})
export class TrimDirective {
  constructor(
    private el: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    @Optional() private ngControl: NgControl
  ) {}

  @HostListener('blur')
  public onBlur(): void {
    const input = this.el.nativeElement;
    const trimValue = input.value.trim();

    if (this.ngControl) {
      this.ngControl.control?.patchValue(trimValue);
    } else {
      input.value = trimValue;
    }
  }
}
