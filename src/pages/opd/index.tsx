import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogBox from '../../components/Modal/DialogBox';
import InputAdornment from "@mui/material/InputAdornment";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AddEditAppointmentForm from '../../sections/opd/AddEditAppointment';
import AddEditDoctorLeaveForm from '../../sections/DoctorUser/DoctorLeaveForm';
import AppointmentsListingTable from '../../sections/opd/AppointmentsListingTable';
import { SearchRounded } from '@mui/icons-material';
//* Add data/utils import below this comment
import { IAppointment } from '../../utils/interfaces/appointment.interface';
import { ADD, APPOINTMENT, LEAVE } from '../../utils/langauge/en/buttonLabels';

const OPDPage: React.FC = () => {

  const [appointmentModalOpen, setAppointmentModalOpen] = React.useState(false);
  const [leaveModalOpen, setLeaveModalOpen] = React.useState(false);

  const handleleaveModalOpen = () => {
    setLeaveModalOpen(true);
  };

  const handleleaveModalClose = () => {
    setLeaveModalOpen(false);
  };

  const handleAppointmentModalOpen = () => {
    setAppointmentModalOpen(true);
  };

  const handleAppointmentModalClose = () => {
    setAppointmentModalOpen(false);
  };

  const [rowData] = useState<IAppointment[]>([
    {
      _id: uuidv4(),
      patientName: "Shafique Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
    {
      _id: uuidv4(),
      patientName: "Jamil Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
    {
      _id: uuidv4(),
      patientName: "Naseem Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
    {
      _id: uuidv4(),
      patientName: "Javed Khan",
      doctorName: "Jamil Khan",
      phone: "0322112222",
      createdAt: "12/12/2020",
      paid: true,
      procedure: "",
      referredBy: "Jamshed Ahmed",
    },
  ]);
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid
        item
        container
        xs={12}
        lg={10}
        spacing={1}
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid
          item
          container
          xs={12}
          md={6}
          spacing={1}
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              name="search"
              placeholder="Enter Name, Phone, Email, Type to search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                value={new Date("2014-08-18T21:11:54")}
                onChange={() => {}}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="flex-end"
          alignContent="center"
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              size="small"
              variant="contained"
              onClick={handleAppointmentModalOpen}
            >
              {ADD + " " + APPOINTMENT}
            </Button>
            <DialogBox
              open={appointmentModalOpen}
              handleClose={handleAppointmentModalClose}
              title={`${ADD} ${APPOINTMENT}`}
            >
              <AddEditAppointmentForm />
            </DialogBox>
            <Button
              sx={{ marginLeft: "1rem" }}
              size="small"
              variant="outlined"
              onClick={handleleaveModalOpen}
            >
              {ADD + " " + LEAVE}
            </Button>
            <DialogBox
              open={leaveModalOpen}
              handleClose={handleleaveModalClose}
              title={`${ADD} ${LEAVE}`}
              fullWidth
              maxWidth="lg"
            >
              <AddEditDoctorLeaveForm />
            </DialogBox>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={10}>
        <AppointmentsListingTable rowData={rowData} />
      </Grid>
    </Grid>
  );
}

export default OPDPage;