export interface RegisterPayloadInterface {
  commonGroup: RegisterPayloadCommonGroupInterface;
}

export interface RegisterPayloadCommonGroupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}
