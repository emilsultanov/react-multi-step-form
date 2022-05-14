import React from 'react';
import {List} from "@mui/material";
import {Step} from "./Step";
import {IStep} from "./types";


interface IStepListProps {
  steps: Array<Omit<IStep, 'stepForm'>>;
  currentStepId: number
}


export function StepList({steps,currentStepId}: IStepListProps) {

  return (
    <List disablePadding>
      {
        steps.map(({id, label}) =>
          <Step
            id={id}
            key={id}
            label={label}
            isValidated={id<currentStepId}
          />
        )
      }
    </List>
  );
}