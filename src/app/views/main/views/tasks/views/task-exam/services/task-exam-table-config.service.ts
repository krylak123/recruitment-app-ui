import { Injectable } from '@angular/core';
import { ListColumnsInterface } from '@shared/components/list';

@Injectable()
export class TaskExamTableConfigService {
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
        field: 'questionQuantity',
        label: 'FIELD.QUESTIONS_QUANTITY',
        type: 'text',
        sort: true,
      },
      {
        field: 'timeLimitSummary',
        label: 'FIELD.TIME_LIMIT_SUMMARY',
        type: 'text',
        sort: true,
      },
      {
        field: 'createAt',
        label: 'FIELD.CREATE_AT',
        type: 'date',
        sort: true,
      },
    ];
  }
}
