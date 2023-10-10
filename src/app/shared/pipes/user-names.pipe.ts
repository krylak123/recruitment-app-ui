import { Pipe, PipeTransform } from '@angular/core';
import { UserTokenInterface } from '@backend/users';
import { RoleEnum } from '@shared/enums';

@Pipe({
  name: 'userNames',
  standalone: true,
})
export class UserNamesPipe implements PipeTransform {
  public transform(user: UserTokenInterface): string {
    if (user.role === RoleEnum.USER) return `${user.firstName} ${user.lastName}`;

    return `(${user.role}) ${user.firstName} ${user.lastName}`;
  }
}
