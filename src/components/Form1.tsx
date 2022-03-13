import React from 'react';
import {Box, TextField} from "@mui/material";

export function Form1() {
  return (
    <Box
      noValidate
      component={'form'}
      autoComplete={'off'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Box mb={4} width={1 / 2}>
        <TextField
          fullWidth
          type={'text'}
          variant={'outlined'}
          name={'firstname'}
          autoComplete={'off'}
          label={'First Name'}
          placeholder={'Enter your firstname'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
      <Box width={1 / 2}>
        <TextField
          fullWidth
          type={'text'}
          variant={'outlined'}
          name={'lastname'}
          autoComplete={'off'}
          label={'Last Name'}
          placeholder={'Enter your lastname'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
    </Box>
  );
}