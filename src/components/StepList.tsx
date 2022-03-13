import React from 'react';
import {List} from "@mui/material";
import {IStep} from "./types";
import {Step} from "./Step";


interface IStepListProps {
  currentStep: IStep;
  steps: IStep[]
}


export function StepList({steps, currentStep}: IStepListProps) {
  return (
    <List disablePadding>
      {
        steps.map(({stepId, stepLabel, isValidated}) =>
          <Step
            key={stepId}
            stepId={stepId}
            stepLabel={stepLabel}
            isValidated={isValidated}
            selected={stepId === currentStep.stepId}
          />
        )
      }
    </List>
  );
}