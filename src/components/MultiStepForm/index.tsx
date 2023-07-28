import {Grid} from "@mui/material";
import React, {ReactNode} from "react";

export interface MultiStepFormProps {
  stepsList: ReactNode;
  formsList: ReactNode;
}


export function MultiStepForm({stepsList, formsList}: MultiStepFormProps) {
  return (
	 <Grid container spacing={2}>
		<Grid item xs={4}>
		  {stepsList}
		</Grid>
		<Grid item xs={8}>
		  {formsList}
		</Grid>
	 </Grid>
  )
}