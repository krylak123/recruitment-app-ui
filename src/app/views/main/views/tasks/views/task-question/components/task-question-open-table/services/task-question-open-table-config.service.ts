import { Injectable } from '@angular/core';
import { ListColumnsInterface } from '@shared/components/list';

@Injectable()
export class TaskQuestionOpenTableConfigService {
  public getTableValues(): ListColumnsInterface[] {
    return [
      {
        field: 'name',
        label: 'FIELD.NAME',
        type: 'text',
        sort: true,
      },
    ];
  }
}
