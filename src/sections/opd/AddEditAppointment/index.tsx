import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddPatientForm from "../../Patients/AddPatientForm";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { AppointmentFormContext, IAvaialableSlots } from "../../../context/AppointmentFormContext";
//* Add data/utils import below this comment
import { ADD, APPOINTMENT } from "../../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../../utils/constants/formConstants";
import { IAppointment } from "../../../utils/interfaces/appointment.interface";
import { IDoctor } from "../../../utils/interfaces/doctor.interface";

const AddEditAppointmentForm: React.FC = () => {
  const {
    values,
    doctorsList,
    patientsList,
    availableSlots,
    handleInputChange,
    handleSubmit,
  } = useContext(AppointmentFormContext);

  const [showAddPatientForm , setShowAddPatientForm] = useState(false);

  return (
    <Box sx={{ margin: "20px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            <TextField
              select
              fullWidth
              size="small"
              id="search-patient"
              name={fieldNames.patientID}
              value={values.patientID}
              label="Search Patient"
              onChange={handleInputChange}
              sx={{ minWidth: "300px" }}
            >
              {patientsList.map((option: IAppointment) => (
                <MenuItem key={option._id} value={option._id}>
                  {option.patientName}
                </MenuItem>
              ))}
            </TextField>
            <Tooltip
              arrow={false}
              placement="top"
              title={
                showAddPatientForm ? "Hide Patient Form" : "Show Patient Form"
              }
            >
              <IconButton
                sx={{ marginLeft: "10px" }}
                onClick={() => setShowAddPatientForm(!showAddPatientForm)}
              >
                {showAddPatientForm ? (
                  <RemoveRoundedIcon />
                ) : (
                  <AddRoundedIcon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
        {showAddPatientForm && (
          <Grid item xs={12}>
            <AddPatientForm />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            size="small"
            id="search-doctor"
            name={fieldNames.doctorID}
            value={values.doctorID}
            label="Search Doctor"
            onChange={handleInputChange}
            sx={{ minWidth: "300px" }}
          >
            {doctorsList.map((option: IDoctor) => (
              <MenuItem key={option._id} value={option._id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            size="small"
            id="search-available-slots"
            name={fieldNames.appointmentTime}
            value={values.appointmentTime}
            label="Available Slots"
            onChange={handleInputChange}
            sx={{ minWidth: "300px" }}
          >
            {availableSlots.map((option: IAvaialableSlots) => (
              <MenuItem key={option._id} value={option._id}>
                {option.start} - {option.end}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            {ADD} {APPOINTMENT}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddEditAppointmentForm;
