import React from 'react';
import {Box} from "@mui/material";
import {MultiStepForm, StepProps} from "./components/MultiStepForm";
import {FormProvider, useForm} from "react-hook-form";

import * as yup from 'yup'


const initialData = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  username: '',
  experience: ''
}

const step_1_schema = yup.object({
  firstName: yup.string().required('include firstname'),
  lastname: yup.string().required('include lastname')
});

const step_2_schema = yup.object({
  age: yup.number().required('include age'),
  experience: yup.number().required('include experience')
});

const step_3_schema = yup.object({
  email: yup.string().required('include email'),
  username: yup.string().required('include username')
});

const Step1 = (props: any) => {
  return <div>Step-1</div>
};

const Step2 = (props: any) => {
  return <div>Step-2</div>
};

const Step3 = (props: any) => {
  return <div>Step-3</div>
};

const steps: Array<StepProps> = [
  {
    label: 'Step-1',
    step: Step1,
    validationSchema: step_1_schema
  },
  {
    label: 'Step-2',
    step: Step2,
    validationSchema: step_2_schema
  },
  {
    label: 'Step-3',
    step: Step3,
    validationSchema: step_3_schema
  },
]





function App() {
  return (
    <Box className="app">
        <MultiStepForm
          steps={steps}
          initialData={initialData}
        />
    </Box>
  );
}

export default App;
