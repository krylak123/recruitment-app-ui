export interface SignUpFormConsent {
  formControl: string;
  label: string;
  isRequired: boolean;
}

export const signUpFormConsents: SignUpFormConsent[] = [
  {
    formControl: 'acceptedRodo',
    label: 'AUTH.CONSENTS.ACCEPTED_RODO',
    isRequired: true,
  },
];
