import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";

export function MultiStepFormHeader() {
  return (
    <Box py={2}>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Grid>
          <Typography>Form title</Typography>
        </Grid>
        <Grid>
          <Button variant="contained" color="success">Confirm</Button>
          <Button variant='outlined'>Save in draft</Button>
          <Button variant="outlined" color="error">Cancel</Button>
        </Grid>
      </Grid>
    </Box>
  );
}