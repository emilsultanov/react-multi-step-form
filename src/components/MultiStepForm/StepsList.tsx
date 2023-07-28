import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import React from "react";


export function StepsList(){
  return(
	 <List>
		<ListItem disablePadding>
		  <ListItemButton>
			 <ListItemText primary="Step-1" />
		  </ListItemButton>
		</ListItem>
		<ListItem disablePadding>
		  <ListItemButton>
			 <ListItemText primary="Step-2" />
		  </ListItemButton>
		</ListItem>
		<ListItem disablePadding>
		  <ListItemButton>
			 <ListItemText primary="Step-3" />
		  </ListItemButton>
		</ListItem>
	 </List>
  )
}