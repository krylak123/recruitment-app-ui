import { RoleEnum } from '@shared/enums';

export interface UserResponseInterface {
  id: string;
  role: RoleEnum;
  email: string;
  firstName: string;
  lastName: string;
  createAt: Date;
  updatedAt: Date;
}
