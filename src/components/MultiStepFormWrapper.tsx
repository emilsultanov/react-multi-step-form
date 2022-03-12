import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import {MultiStepFormHeader} from "./MultiStepFormHeader";
import {MultiStepFormSidebar} from "./MultiStepFormSidebar";
import {MultiStepFormContent} from "./MultiStepFormContent";
import {StepList} from "./StepList";

import {IForm, IStep} from "./types";
import {StepForm} from "./StepForm";


interface IMultiStepFormWrapperProps {
}




const forms: IForm[] = [
  {
    formId: 1,
    form: StepForm
  },
  {
    formId: 2,
    form: StepForm
  },
  {
    formId: 3,
    form: StepForm
  },
  {
    formId: 4,
    form: StepForm
  },
  {
    formId: 5,
    form: StepForm
  },
]

export function MultiStepFormWrapper(props: IMultiStepFormWrapperProps) {
  return (
    <Box>
      <Container fixed>
        <MultiStepFormHeader/>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <MultiStepFormSidebar>
              <StepList />
            </MultiStepFormSidebar>
          </Grid>
          <Grid item md={8}>
            <MultiStepFormContent>
              Current Content
            </MultiStepFormContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}