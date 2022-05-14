import React, {useCallback, useState} from 'react';
import {Box, Container, Grid} from "@mui/material";
import {MultiStepFormSidebar} from "./MultiStepFormSidebar";
import {MultiStepFormContent} from "./MultiStepFormContent";
import {StepList} from "./StepList";

import {IStep} from "./types";


interface IMultiStepFormWrapperProps {
  steps: Array<IStep>
}


export function MultiStepFormWrapper({steps}: IMultiStepFormWrapperProps) {

  const [currentStepId, setCurrentStepId] = useState<number>(1);

  const handlePrevClick = useCallback(() => {
    if (currentStepId > 0) {
      setCurrentStepId(prevState => --prevState);
    }
  }, [currentStepId]);

  const handleNextClick = useCallback(() => {
    if (currentStepId < steps.length) {
      setCurrentStepId(prevState => ++prevState);
    }
  }, [currentStepId, steps.length]);

  const StepForm = steps[currentStepId - 1].stepForm;
  let isFirstStep: boolean = currentStepId === 1;
  let isLastStep: boolean = currentStepId === steps.length;


  return (
    <Box pt={4}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <MultiStepFormSidebar>
              <StepList steps={steps} currentStepId={currentStepId}/>
            </MultiStepFormSidebar>
          </Grid>
          <Grid item md={8}>
            <MultiStepFormContent
              isLastStep={isLastStep}
              isFirstStep={isFirstStep}
              handlePrevClick={handlePrevClick}
              handleNextClick={handleNextClick}
            >
              <StepForm/>
            </MultiStepFormContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}