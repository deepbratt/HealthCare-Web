import React, { useState } from "react";
import { Box, Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { IPatientsData } from "../../utils/interfaces/user.interface";

const AddPatientForm: React.FC = () => {
  const defaultData: IPatientsData = {
    _id: '',
    mrNum: '',
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    dob: '',
  }
  const [newPatient, setNewPatient] = useState<IPatientsData>(defaultData);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewPatient({
      ...newPatient,
      [name]: value
    })
  }

  return (
    <Box
      component="form"
      sx={{
        marginTop: '1rem',
      }}
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            name="firstName"
            id="firstName"
            label="First Name"
            fullWidth
            value={newPatient.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            name="lastName"
            id="lastName"
            label="Last Name"
            fullWidth
            value={newPatient.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            name="phone"
            id="phone"
            label="Phone"
            fullWidth
            value={newPatient.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date Of Birth"
              value={newPatient.dob}
              onChange={(newValue) => {
                console.log(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={newPatient.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          alignContent="center"
          sx={{
            padding: '1rem',
            textAlign: 'right'
          }}
        >
          <Button
            variant="contained"
          >
            ADD PATIENT
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddPatientForm;
