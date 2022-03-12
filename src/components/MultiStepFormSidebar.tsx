import React, {ReactNode} from 'react';
import {Box} from "@mui/material";

interface IMultiStepFormSidebarProps {
  children: ReactNode
}

export function MultiStepFormSidebar({children}: IMultiStepFormSidebarProps) {
  return (
    <Box>
      {children}
    </Box>
  );
}