export interface SignUpFormValues {
  commonGroup: SignUpFormValuesCommonGroup;
  dataGroup: SignUpFormValuesDataGroup;
}

export interface SignUpFormValuesCommonGroup {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface SignUpFormValuesDataGroup {
  test: string;
}
