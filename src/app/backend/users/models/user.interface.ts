import { RoleEnum } from '@shared/enums';

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  role: RoleEnum;
}
