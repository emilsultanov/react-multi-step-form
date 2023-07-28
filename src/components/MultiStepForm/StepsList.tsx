import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import React from "react";

export interface StepProps {
  label: string;
  formIndex: number
}

export interface StepsListProps {
  steps: Array<StepProps>
}

export function StepsList({steps}: StepsListProps) {
  return (<List>
	 {steps.map((step, index) => (<ListItem key={index} disablePadding>
		<ListItemButton>
		  <ListItemText primary={step.label}/>
		</ListItemButton>
	 </ListItem>))}
  </List>)
}