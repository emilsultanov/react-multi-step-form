import React from 'react';
import {Box, Container} from "@mui/material";
import {MultiStepForm} from "./components/MultiStepForm";
import {StepsList} from "./components/MultiStepForm/StepsList";
import {FormsList} from "./components/MultiStepForm/FormsList";


function App() {
  return (
	 <Box className="app">
		<Container sx={{paddingY: '50px'}}>
		  <MultiStepForm
		  	stepsList={<StepsList/>}
			formsList={<FormsList />}
		  />
		</Container>
	 </Box>
  );
}

export default App;
