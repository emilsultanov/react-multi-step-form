import {Box} from "@mui/material";
import React, {ElementType, ReactComponentElement, ReactElement, ReactNode, useState} from "react";

export interface StepProps {
  label: string;
  step: ElementType
}

export interface MultiStepFormProps<S, D> {
  steps: Array<S>,
  initialData: D
}


export function MultiStepForm<S extends StepProps, D extends {}>({steps, initialData}: MultiStepFormProps<S, D>){
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  const CurrentStep = steps[currentStepIndex].step;
  
  return(
	 <Box>
		<Box>
		  <Box width={'300px'}>{steps?.map(step => <p key={step.label}>{step?.label}</p>)}</Box>
		  <Box width={'700px'}>
			 <CurrentStep />
		  </Box>
		</Box>
	 </Box>
  )
}