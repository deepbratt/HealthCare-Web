import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import PatientsListingTable from "../../sections/Patients/PatientsListingTable";
import { Grid, Box, TextField, InputAdornment, Button } from "@mui/material";
import { Add, SearchRounded } from "@mui/icons-material";

const PatientsPage: React.FC = () => {
  const { patientsData } = useContext(UserContext)

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
            >
              {"Add Patients"}
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} lg={10}>
            <PatientsListingTable patientsData={patientsData} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
};

export default PatientsPage;
