import { Pipe, PipeTransform } from '@angular/core';
import { DATE_FORMAT_WITHOUT_TIME } from '@shared/constants';
import { format } from 'date-fns';

@Pipe({
  name: 'listValueFormat',
  standalone: true,
})
export class ListValueFormatPipe implements PipeTransform {
  public transform(value: unknown, type: 'text' | 'date'): unknown {
    if (type === 'text') {
      return value;
    } else if (type === 'date') {
      const mappedToDate = value as Date;

      return format(new Date(mappedToDate), DATE_FORMAT_WITHOUT_TIME);
    }

    return value;
  }
}
