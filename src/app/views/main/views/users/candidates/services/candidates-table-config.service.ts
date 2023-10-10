import { Injectable } from '@angular/core';
import { ListColumnsInterface } from '@shared/components/list';

@Injectable()
export class CandidatesTableConfigService {
  public getTableValues(): ListColumnsInterface[] {
    return [
      {
        field: 'firstName',
        label: 'LIST.COLUMN.FIRST_NAME',
        type: 'text',
      },
      {
        field: 'lastName',
        label: 'LIST.COLUMN.LAST_NAME',
        type: 'text',
      },
      {
        field: 'email',
        label: 'LIST.COLUMN.EMAIL',
        type: 'text',
      },
      {
        field: 'createAt',
        label: 'LIST.COLUMN.CREATE_AT',
        type: 'date',
      },
      {
        field: 'updatedAt',
        label: 'LIST.COLUMN.UPDATED_AT',
        type: 'date',
      },
    ];
  }
}
