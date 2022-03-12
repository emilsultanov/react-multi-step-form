import React from 'react';
import {List} from "@mui/material";
import {IStep} from "./types";
import {Step} from "./Step";
import {useRecoilState, useRecoilValue} from "recoil";
import {CurrentStepAtom, StepsAtom} from "./store";


export function StepList() {
  const steps = useRecoilValue<IStep[]>(StepsAtom);
  const [currentStep, setCurrentStep] = useRecoilState<IStep>(CurrentStepAtom);

  return (
    <List disablePadding>
      {
        steps.map(({stepId, stepLabel, isValidated}, index, current) =>
          <Step
            key={stepId}
            stepId={stepId}
            stepLabel={stepLabel}
            isValidated={isValidated}
            selected={stepId === currentStep.stepId}
            onClick={() => setCurrentStep(current[index])}
          />
        )
      }
    </List>
  );
}