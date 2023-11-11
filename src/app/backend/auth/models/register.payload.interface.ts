export interface RegisterPayloadInterface {
  commonGroup: RegisterPayloadCommonGroupInterface;
  additionalGroup?: RegisterPayloadAdditionalGroupInterface;
  consentsGroup?: RegisterPayloadConsentsGroupInterface;
}

export interface RegisterPayloadCommonGroupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export interface RegisterPayloadAdditionalGroupInterface {
  gitRepoLink: string;
}

export interface RegisterPayloadConsentsGroupInterface {
  acceptedRodo: boolean;
}
