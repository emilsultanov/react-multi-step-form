import React, {ReactNode} from 'react';
import {Box, Button, Grid} from "@mui/material";

interface IMultiStepFormContentProps {
  children: ReactNode;
  isLastStep: boolean;
  isFirstStep: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export function MultiStepFormContent({
                                       children,
                                       isFirstStep,
                                       isLastStep,
                                       onPrevClick,
                                       onNextClick
                                     }: IMultiStepFormContentProps) {


  return (
    <Box height={1} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Box pb={2} flex={1}>
        {children}
      </Box>
      <Box>
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item>
            <Button variant="outlined" color="error">Clear</Button>
          </Grid>
          <Grid item>
            <Button variant={'contained'} disabled={isFirstStep} onClick={() => onPrevClick()}>Prev</Button>
            <Button
              color={'success'}
              variant={'contained'}
              disabled={isLastStep}
              onClick={() => onNextClick()}
            >
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}