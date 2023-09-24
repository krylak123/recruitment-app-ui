export interface SignUpFormValues {
  commonGroup: SignUpFormValuesCommonGroup;
  dataGroup: SignUpFormValuesDataGroup;
}

export interface SignUpFormValuesCommonGroup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpFormValuesDataGroup {
  test: string;
}
