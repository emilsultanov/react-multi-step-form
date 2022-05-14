import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {CheckCircle, CheckCircleOutlined} from "@mui/icons-material";

import {IStep} from "./types";

interface Props extends Omit<IStep, 'stepForm'> {
  isValidated: boolean
}

export function Step({id, label, isValidated}: Props) {
  return (
    <ListItemButton>
      <ListItemIcon>
        {id}
      </ListItemIcon>
      <ListItemText primary={label}/>
      <ListItemIcon>
        {isValidated ? <CheckCircle/> : <CheckCircleOutlined/>}
      </ListItemIcon>
    </ListItemButton>
  );
}