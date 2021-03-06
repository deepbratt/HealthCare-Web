import React, { useState } from "react";
import InputField from "../../components/InputFields";
import { Box, Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
//* Add data/utils import below this comment
import { IPatientsData } from "../../utils/interfaces/user.interface";
import { fieldNames } from "../../utils/constants/formConstants";
import { ADD, PATIENT } from "../../utils/langauge/en/buttonLabels";

const AddPatientForm: React.FC = () => {
  const defaultData: IPatientsData = {
    _id: '',
    mrNum: '',
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    dob: null,
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

  const handleDateChange = (newValue: string | null) => {    
    setNewPatient({
      ...newPatient,
      dob: newValue!
    })
  }

  const handleSubmit = () => console.log(newPatient);

  return (
    <Box
      component="form"
      sx={{
        marginTop: "1rem",
      }}
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputField
            id="patient-first-name"
            label="First Name"
            name={fieldNames.firstName}
            value={newPatient.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            id="patient-last-name"
            label="Last Name"
            name={fieldNames.lastName}
            value={newPatient.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            id="patient-phone"
            label="Phone"
            name={fieldNames.phone}
            value={newPatient.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date Of Birth"
              value={newPatient.dob}
              onChange={handleDateChange}
              renderInput={(params) => <InputField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            row
            name={fieldNames.gender}
            value={newPatient.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
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
            padding: "1rem",
            textAlign: "right",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            {ADD} {PATIENT}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddPatientForm;
