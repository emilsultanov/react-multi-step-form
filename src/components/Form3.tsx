import React from 'react';
import {Box, TextField} from "@mui/material";

export function Form3() {
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
          name={'country'}
          autoComplete={'off'}
          label={'Country'}
          placeholder={'Enter your country'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
      <Box mb={4} width={1 / 2}>
        <TextField
          fullWidth
          type={'text'}
          name={'city'}
          autoComplete={'off'}
          label={'City'}
          placeholder={'Enter your country'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
      <Box width={1 / 2}>
        <TextField
          fullWidth
          type={'number'}
          name={'age'}
          autoComplete={'off'}
          label={'Age'}
          placeholder={'Enter your age'}
          InputLabelProps={{shrink: true}}
        />
      </Box>
    </Box>
  );
}