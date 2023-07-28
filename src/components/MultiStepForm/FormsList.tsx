import {Box} from "@mui/material";
import {ElementType} from "react";

export interface FormProps {
  component: ElementType;
}

export interface FormsListProps {
  forms: Array<FormProps>
}


export function FormsList({forms}: FormsListProps) {
  return (
	 <Box>
		{
		  forms.map((form, index) => (
			 <form.component key={index}/>
		  ))
		}
	 </Box>
  )
}