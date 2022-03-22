import {ReactNode} from "react";

export interface IStep {
  stepId: number;
  stepLabel: string;
  isSelected: boolean;
  isValidated: boolean;
  prevStepId: number | undefined;
  nextStepId: number | undefined;
}

export interface IForm{
  formId: number;
  form: ReactNode,
}

export interface IFormData{
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  country: string;
  city: string;
  age: number;
}