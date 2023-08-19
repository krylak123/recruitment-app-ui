import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'signUpStepsItemsTranslate',
  standalone: true,
})
export class SignUpStepsItemsTranslatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  public transform(stepsItems: MenuItem[]): MenuItem[] {
    return stepsItems.map(item => ({
      ...item,
      label: item.label ? this.translateService.instant(item.label) : '',
    }));
  }
}
