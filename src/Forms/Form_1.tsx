import {Box, TextField} from "@mui/material";


export function Form_1(){
  return(
	 <Box mb={5} width={400}>
		<Box mb={4}>
		  <TextField fullWidth label={'First name'} placeholder={'Enter first name'} />
		</Box>
		<Box>
		  <TextField fullWidth label={'Last name'} placeholder={'Enter last name'} />
		</Box>
	 </Box>
  )
}