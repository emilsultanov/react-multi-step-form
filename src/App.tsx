import React from 'react';
import {Box} from "@mui/material";
import {MultiStepFormWrapper} from "./components/MultiStepFormWrapper";
import {AccountDetails} from "./components/AccountDetails";
import {PaymentDetails} from "./components/PaymentDetails";
import {PersonalDetails} from "./components/PersonalDetails";
import {IStep} from "./components/types";


const steps: Array<IStep> = [
  {
    id: 1,
    label: 'Account Details',
    stepForm: AccountDetails,
  },
  {
    id: 2,
    label: 'Payment Details',
    stepForm: PaymentDetails,
  },
  {
    id: 3,
    label: 'Personal Details',
    stepForm: PersonalDetails,
  }
];


function App() {
  return (
    <Box className="app">
      <MultiStepFormWrapper steps={steps}/>
    </Box>
  );
}

export default App;
