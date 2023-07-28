import {Grid} from "@mui/material";
import React, {ElementType, useState} from "react";
import {StepsList} from "./StepsList";


export interface StepProps {
  label: string;
  form: ElementType
}

export interface MultiStepFormProps {
  steps: Array<StepProps>
}


export function MultiStepForm({steps}: MultiStepFormProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  
  const stepLabels = steps.map(step => step.label);
  
  const Form = steps[activeStepIndex].form;
  
  return (
	 <Grid container spacing={2}>
		<Grid item xs={4}>
		  <StepsList steps={stepLabels}/>
		</Grid>
		<Grid item xs={8}>
		  <Form/>
		</Grid>
	 </Grid>
  )
}