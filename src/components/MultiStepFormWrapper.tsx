import React, {useCallback, useState} from 'react';
import {Box, Container, Grid} from "@mui/material";
import {MultiStepFormHeader} from "./MultiStepFormHeader";
import {MultiStepFormSidebar} from "./MultiStepFormSidebar";
import {MultiStepFormContent} from "./MultiStepFormContent";
import {StepList} from "./StepList";

import {IStep} from "./types";
import {Form1} from "./Form1";
import {Form2} from "./Form2";
import {Form3} from "./Form3";


interface IMultiStepFormWrapperProps {
}


const forms = [<Form1/>, <Form2/>, <Form3/>]

export const initialSteps: IStep[] = [
  {
    stepId: 1,
    prevStepId: undefined,
    nextStepId: 2,
    stepLabel: 'First step',
    isSelected: false,
    isValidated: false
  },
  {
    stepId: 2,
    prevStepId: 1,
    nextStepId: 3,
    stepLabel: 'Second step',
    isSelected: false,
    isValidated: false
  },
  {
    stepId: 3,
    prevStepId: 2,
    nextStepId: undefined,
    stepLabel: 'Third step',
    isSelected: false,
    isValidated: false
  },
];

export function MultiStepFormWrapper(props: IMultiStepFormWrapperProps) {

  const [steps, setSteps] = useState<IStep[]>(initialSteps);
  const [currentStep, setCurrentStep] = useState<IStep>(initialSteps[0]);

  const lastStepIndex: number = steps.length - 1;
  const isFirstStep: boolean = currentStep.stepId === 1;
  const isLastStep: boolean = lastStepIndex === currentStep.stepId - 1;

  const onSubmit = useCallback(() => {
    console.log('submit event => ');
  }, []);

  const onPrevClick = useCallback(() => {
    const _currentStep: IStep | undefined = steps.find(step => step.stepId === currentStep.prevStepId);
    if (_currentStep) setCurrentStep(_currentStep);
  }, [steps, isFirstStep, currentStep]);

  const onNextClick = useCallback(() => {
    const _currentStep: IStep | undefined = steps.find(step => step.stepId === currentStep.nextStepId);
    const _steps = steps.map((step) => ({
      ...step,
      isValidated: step.stepId === currentStep.stepId ? true : step.isValidated
    }));
    setSteps(_steps);
    if (_currentStep) setCurrentStep(_currentStep);
  }, [steps, isLastStep, currentStep]);


  return (
    <Box>
      <Container fixed>
        <MultiStepFormHeader/>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <MultiStepFormSidebar>
              <StepList steps={steps} currentStep={currentStep}/>
            </MultiStepFormSidebar>
          </Grid>
          <Grid item md={8}>
            <MultiStepFormContent
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
            >
              {forms[currentStep.stepId - 1]}
            </MultiStepFormContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}