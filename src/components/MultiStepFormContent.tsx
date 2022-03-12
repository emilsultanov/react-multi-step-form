import React, {ReactNode} from 'react';
import {Box, Button, Grid} from "@mui/material";
import {useRecoilState} from "recoil";
import {IStep} from "./types";
import {CurrentStepAtom, StepsAtom} from "./store";

interface IMultiStepFormContentProps {
  children: ReactNode
}

export function MultiStepFormContent({children}: IMultiStepFormContentProps) {
  const [steps, setSteps] = useRecoilState<IStep[]>(StepsAtom);
  const [currentStep, setCurrentStep] = useRecoilState<IStep>(CurrentStepAtom);

  const nextClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    let stepsCopy: IStep[] = [...steps];
    let nextStep: IStep | undefined = steps.find(step => step.stepId === currentStep.nextStepId);
    let currentStepIndex: number = [...steps].findIndex(step => step.stepId === currentStep.stepId);
    let currentStepCopy: IStep = {...steps[currentStepIndex], isValidated: true};

    stepsCopy[currentStepIndex] = currentStepCopy;
    setSteps(stepsCopy);
    if (nextStep) {
      setCurrentStep(nextStep)
    }
  };

  const prevClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    let prevStep: IStep | undefined = steps.find(step => step.stepId === currentStep.prevStepId);
    if (prevStep) setCurrentStep(prevStep);
  };

  return (
    <Box height={1} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Box flex={1}>
        {children}
      </Box>
      <Box>
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item>
            <Button variant="outlined" color="error">Clear</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" disabled={!currentStep.prevStepId} onClick={prevClickHandler}>Prev</Button>
            <Button variant="contained" color="success" disabled={!currentStep.nextStepId}
                    onClick={nextClickHandler}>Next</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}