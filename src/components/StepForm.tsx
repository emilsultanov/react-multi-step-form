import React from 'react';
import {IForm} from "./types";

interface IStepFormProps extends Pick<IForm, 'formId'> {
}

export function StepForm({formId}: IStepFormProps) {
  return (
    <div>Form id - {formId}</div>
  );
}