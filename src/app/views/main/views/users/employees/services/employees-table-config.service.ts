import { Injectable } from '@angular/core';
import { ListColumnsInterface } from '@shared/components/list';

@Injectable()
export class EmployeesTableConfigService {
  public getTableValues(): ListColumnsInterface[] {
    return [
      {
        field: 'role',
        label: 'FIELD.ROLE',
        type: 'text',
        sort: true,
      },
      {
        field: 'firstName',
        label: 'FIELD.FIRST_NAME',
        type: 'text',
        sort: true,
      },
      {
        field: 'lastName',
        label: 'FIELD.LAST_NAME',
        type: 'text',
        sort: true,
      },
      {
        field: 'email',
        label: 'FIELD.EMAIL',
        type: 'text',
        sort: true,
      },
      {
        field: 'createAt',
        label: 'FIELD.CREATE_AT',
        type: 'date',
        sort: true,
      },
      {
        field: 'updatedAt',
        label: 'FIELD.UPDATED_AT',
        type: 'date',
        sort: true,
      },
    ];
  }
}
