import React from 'react';
import {ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText} from "@mui/material";
import {CheckCircle, CheckCircleOutlined} from "@mui/icons-material";

import {IStep} from "./types";


interface IStepProps extends Omit<IStep, 'prevStepId' | 'nextStepId' | 'isSelected'>, ListItemButtonProps {
}

export function Step({stepId, stepLabel, isValidated, ...rest}: IStepProps) {
  return (
    <ListItemButton {...rest}>
      <ListItemIcon>
        {stepId}
      </ListItemIcon>
      <ListItemText primary={stepLabel}/>
      <ListItemIcon>
        {isValidated ? <CheckCircle/> : <CheckCircleOutlined/>}
      </ListItemIcon>
    </ListItemButton>
  );
}