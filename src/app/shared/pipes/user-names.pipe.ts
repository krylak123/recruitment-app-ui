import { Pipe, PipeTransform } from '@angular/core';
import { UserInterface } from '@backend/users';

@Pipe({
  name: 'userNames',
  standalone: true,
})
export class UserNamesPipe implements PipeTransform {
  public transform(user: UserInterface): string {
    return `${user.firstName} ${user.lastName}`;
  }
}
