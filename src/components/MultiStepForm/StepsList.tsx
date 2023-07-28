import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import React from "react";

export interface StepProps {
  label: string;
}

export interface StepsListProps {
  steps: Array<string>
}

export function StepsList({steps}: StepsListProps) {
  return (<List>
	 {steps.map((step, index) => (<ListItem key={index} disablePadding>
		<ListItemButton>
		  <ListItemText primary={step}/>
		</ListItemButton>
	 </ListItem>))}
  </List>)
}