import React from 'react';
import {Box, Container} from "@mui/material";
import {MultiStepForm, StepProps} from "./components/MultiStepForm";
import {Form_1} from "./Forms/Form_1";
import {Form_2} from "./Forms/Form_2";
import {Form_3} from "./Forms/Form_3";


const steps: Array<StepProps> = [
  {
	 label: 'Step-1',
	 form: Form_1
  },
  {
	 label: 'Step-2',
	 form: Form_2
  },
  {
	 label: 'Step-3',
	 form: Form_3
  }
];


function App() {
  return (
	 <Box className="app">
		<Container sx={{paddingY: '50px'}}>
		  <MultiStepForm
			 steps={steps}
		  />
		</Container>
	 </Box>
  );
}

export default App;
