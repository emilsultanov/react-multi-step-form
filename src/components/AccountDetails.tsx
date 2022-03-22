import React from 'react';
import {Box, TextField} from "@mui/material";

export function AccountDetails() {
  return (
    <Box>
      <TextField
        fullWidth
        type={'text'}
        variant={'outlined'}
        autoComplete={'off'}
        name={'username'}
        label={'Username'}
        placeholder={'Enter your username'}
        InputLabelProps={{shrink: true}}
      />
      <TextField
        fullWidth
        type={'email'}
        variant={'outlined'}
        autoComplete={'off'}
        name={'email'}
        label={'Email'}
        placeholder={'Enter your personal email address'}
        InputLabelProps={{shrink: true}}
      />
      <TextField
        fullWidth
        type={'password'}
        variant={'outlined'}
        autoComplete={'off'}
        name={'password'}
        label={'Password'}
        placeholder={'Enter your Password'}
        InputLabelProps={{shrink: true}}
      />
    </Box>
  );
}