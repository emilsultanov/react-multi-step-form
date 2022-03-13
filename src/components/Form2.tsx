import React from 'react';
import {Box, FormControl, OutlinedInput, TextField} from "@mui/material";

export function Form2() {
  return (
    <Box
      noValidate
      component={'form'}
      autoComplete={'off'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Box mb={4} width={1/2}>
        <TextField
          fullWidth
          type={'text'}
          variant={'outlined'}
          name={'username'}
          autoComplete={'off'}
          label={'User name'}
          placeholder={'Enter your username'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
      <Box mb={4} width={1/2}>
        <TextField
          fullWidth
          type={'email'}
          variant={'outlined'}
          name={'email'}
          autoComplete={'off'}
          label={'E-mail'}
          placeholder={'Enter your email'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
      <Box width={1/2}>
        <TextField
          fullWidth
          type={'password'}
          variant={'outlined'}
          name={'password'}
          autoComplete={'off'}
          label={'User name'}
          placeholder={'Enter your password'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
    </Box>
  );
}