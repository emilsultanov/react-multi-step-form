import React from 'react';
import {Box, Container} from "@mui/material";
import {MultiStepForm} from "./components/MultiStepForm";
import {StepProps, StepsList} from "./components/MultiStepForm/StepsList";
import {FormsList} from "./components/MultiStepForm/FormsList";


const steps: Array<StepProps> = [
  {
	 label: 'Step-1',
	 formIndex: 1
  },
  {
	 label: 'Step-2',
	 formIndex: 2
  },
  {
	 label: 'Step-3',
	 formIndex: 3
  },
]


function App() {
  return (
	 <Box className="app">
		<Container sx={{paddingY: '50px'}}>
		  <MultiStepForm
		  	stepsList={<StepsList steps={steps}/>}
			formsList={<FormsList />}
		  />
		</Container>
	 </Box>
  );
}

export default App;
