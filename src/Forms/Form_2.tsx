import {Box, TextField} from "@mui/material";


export function Form_2(){
  return(
	 <Box mb={5} width={400}>
		<Box mb={4}>
		  <TextField fullWidth label={'Username'} placeholder={'Enter username'} />
		</Box>
		<Box>
		  <TextField fullWidth label={'E-mail'} placeholder={'Enter e-mail'} />
		</Box>
	 </Box>
  )
}