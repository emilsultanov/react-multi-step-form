import React from 'react';
import {Box, TextField} from "@mui/material";

export function PaymentDetails() {
  return (
    <Box>
      <TextField
        fullWidth
        type={'text'}
        variant={'outlined'}
        autoComplete={'off'}
        name={'cvcnumber'}
        label={'CVC Number'}
        placeholder={'Enter CVC Number'}
        InputLabelProps={{shrink: true}}
      />
      <TextField
        fullWidth
        type={'number'}
        variant={'outlined'}
        autoComplete={'off'}
        name={'cardnumber'}
        label={'Cardnumber'}
        placeholder={'Enter card number'}
        InputLabelProps={{shrink: true}}
      />
      <TextField
        fullWidth
        type={'text'}
        variant={'outlined'}
        autoComplete={'off'}
        name={'cardholdername'}
        label={'Card Holder Name'}
        placeholder={'Enter Card holder name'}
        InputLabelProps={{shrink: true}}
      />
    </Box>
  );
}