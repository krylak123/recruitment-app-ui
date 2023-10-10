import { RoleEnum } from '@shared/enums';

export interface UserTokenInterface {
  id: string;
  firstName: string;
  lastName: string;
  role: RoleEnum;
}
