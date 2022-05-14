import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField
} from "@mui/material";

export const countries: Array<string> = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia & Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];


export const genders: Array<{ label: string; value: string }> = [
  {label: "Male", value: "male"},
  {label: "Female", value: "female"},
  {label: "Other", value: "other"},
];


export function PersonalDetails() {
  return (
    <Box>
      <TextField
        fullWidth
        type={'text'}
        variant={'outlined'}
        autoComplete={'off'}
        name={'fullName'}
        label={'FullName'}
        placeholder={'Enter your fullName'}
        InputLabelProps={{shrink: true}}
      />
      <TextField
        select
        fullWidth
        defaultValue={''}
        variant={'outlined'}
        autoComplete={'off'}
        name={'country'}
        label={'Country'}
        placeholder={'Select your country'}
        InputLabelProps={{shrink: true}}
      >
        {
          countries.map(country => (
            <MenuItem key={country} value={country.toLowerCase()}>
              {country}
            </MenuItem>
          ))
        }
      </TextField>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {
            genders.map(({label, value}) => (
              <FormControlLabel key={value} value={value} control={<Radio/>} label={label}/>
            ))
          }
        </RadioGroup>
      </FormControl>
      <TextareaAutosize
        name={'about'}
        aria-label="minimum height"
        minRows={3}
        placeholder="Minimum 3 rows"
        style={{width: 200}}
      />
    </Box>
  );
}