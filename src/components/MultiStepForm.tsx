import {Box} from "@mui/material";
import React, {ElementType, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import * as yup from 'yup'
import {OptionalObjectSchema} from "yup/es/object";
import {yupResolver} from "@hookform/resolvers/yup";

export interface StepProps {
  label: string;
  step: ElementType;
  validationSchema: any
}

export interface MultiStepFormProps<S, D> {
  steps: Array<S>,
  defaultValues: D
}


export function MultiStepForm<S extends StepProps, D extends {}>({steps, defaultValues}: MultiStepFormProps<S, D>) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  const methods = useForm({
	 defaultValues,
	 mode: 'onSubmit',
	 resolver: yupResolver(steps[currentStepIndex].validationSchema)
  });
  
  const CurrentStep = steps[currentStepIndex].step;
  
  return (
	 <FormProvider {...methods}>
		<form>
		  <Box>
			 <Box display={'flex'}>
				<Box width={'300px'}>{steps?.map((step) => <p key={step.label}>{step?.label}</p>)}</Box>
				<Box width={'700px'}>
				  <CurrentStep/>
				</Box>
			 </Box>
			 <Box>
				<button>prev</button>
				<button>next</button>
			 </Box>
		  </Box>
		</form>
	 </FormProvider>
  )
}