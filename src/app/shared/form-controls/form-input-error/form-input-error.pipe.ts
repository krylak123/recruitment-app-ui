import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { formErrorsMap } from '@core/errors';

@Pipe({
  name: 'formInputError',
  standalone: true,
})
export class FormInputErrorPipe implements PipeTransform {
  public transform(errors: ValidationErrors): string {
    const key: string = Object.keys(errors)[0];

    return formErrorsMap[key] ?? 'ERROR.FORM.DEFAULT';
  }
}
