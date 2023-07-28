import {Box, TextField} from "@mui/material";


export function Form_3(){
  return(
	 <Box mb={5} width={400}>
		<Box mb={4}>
		  <TextField fullWidth label={'Age'} placeholder={'Enter age'} />
		</Box>
		<Box>
		  <TextField fullWidth label={'Experience'} placeholder={'Enter experience'} />
		</Box>
	 </Box>
  )
}