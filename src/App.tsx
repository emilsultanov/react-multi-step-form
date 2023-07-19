import React from 'react';
import {Box} from "@mui/material";
import {MultiStepForm, StepProps} from "./components/MultiStepForm";


const initialData = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  username: '',
  experience: ''
}

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
    step: Step1
  },
  {
    label: 'Step-2',
    step: Step2
  },
  {
    label: 'Step-3',
    step: Step3
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
