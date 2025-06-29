import { ChangeEvent } from "react";

export interface LoginSubmitProp {
  email: string;
  password: string;
}

export interface LoginFormType {
  password?: boolean;
  logoClass?: string;
  validation?: boolean;
}

export interface SignupProp {
  logoClass?: string;
}

export interface SignupSubmitProp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface FormValueInterFace {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  age: string;
  passPort: string;
  country: string;
  state: string;
  city: string;
}

export interface RegisterWizardForm {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  formValue: FormValueInterFace;
}

export interface RegisterWizardButtonProp {
  showFinish: boolean;
  level: number;
  handleBackButton: () => void;
  handleNextButton: () => void;
  formValue: FormValueInterFace;
}

export interface RegisterWizardListProp {
  level: number;
}

export interface CountdownDataProp {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}
