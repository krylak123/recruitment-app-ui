import { Injectable } from '@angular/core';
import { ListColumnsInterface } from '@shared/components/list';

@Injectable()
export class TaskQuestionCloseTableConfigService {
  public getTableValues(): ListColumnsInterface[] {
    return [
      {
        field: 'name',
        label: 'FIELD.NAME',
        type: 'text',
        sort: true,
      },
      {
        field: 'expLevel',
        label: 'FIELD.EXP_LEVEL',
        type: 'text',
        sort: true,
      },
      {
        field: 'timeLimit',
        label: 'FIELD.TIME_LIMIT_SUMMARY',
        type: 'text',
        sort: true,
      },
    ];
  }
}
