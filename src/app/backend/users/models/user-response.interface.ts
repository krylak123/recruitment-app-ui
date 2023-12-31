import { RoleEnum } from '@shared/enums';

export interface UserResponseInterface {
  id: string;
  role: RoleEnum;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  createAt: Date;
  updatedAt: Date;
}

export interface UserCandidateResponseInterface extends UserResponseInterface {
  additionalInfo: {
    gitRepoLink: string;
    acceptedRodo: boolean;
  };
}
