import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import PatientsListingTable from "../../sections/Patients/PatientsListingTable";
import { Grid, Box, TextField, InputAdornment, Button } from "@mui/material";
import { Add, SearchRounded } from "@mui/icons-material";
import DialogBox from "../../components/Modal/DialogBox";
import AddPatientForm from "../../sections/Patients/AddPatientForm";

const PatientsPage: React.FC = () => {
  const { patientsData } = useContext(UserContext)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ marginTop: "1rem", width: '95%' }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid
          item
          xs={12}
          lg={10}
          container
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              name="search"
              placeholder="Search by Name, MR#, Phone or Email..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="flex-end"
            alignContent="center"
          >
            <Button
              size="small"
              variant="contained"
              endIcon={<Add />}
              onClick={handleClickOpen}
            >
              {"Add New Patient"}
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} lg={10}>
            <PatientsListingTable patientsData={patientsData} />
          </Grid>
        </Grid>
      </Grid>
      <DialogBox
        open={open}
        handleClose={handleClose}
        title={`Add New Patient`}
      >
        <AddPatientForm />
      </DialogBox>
    </Box>
  )
};

export default PatientsPage;
