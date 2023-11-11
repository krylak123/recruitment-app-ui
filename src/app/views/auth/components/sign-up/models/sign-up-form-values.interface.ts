export interface SignUpFormValues {
  commonGroup: SignUpFormValuesCommonGroup;
  dataGroup: SignUpFormValuesDataGroup;
  consentsGroup: SignUpFormValuesConsentsGroup;
}

export interface SignUpFormValuesCommonGroup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpFormValuesDataGroup {
  phone: string;
  gitRepoLink: string;
}

export interface SignUpFormValuesConsentsGroup {
  acceptedRodo: boolean[];
}
