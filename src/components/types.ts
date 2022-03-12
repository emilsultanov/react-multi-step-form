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
  form: ReactNode
}