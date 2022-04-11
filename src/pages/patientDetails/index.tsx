import React from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { styled } from "@mui/system";
import PatientProfile from "../../sections/PatientDetails/PatientProfile";
import PatientInfoCard from "../../sections/PatientDetails/PatientInfoCard";

const PatientDetails: React.FC = () => {
  const { id } = useParams();

  const patient = {
    mrNum: "MMC-163153",
    firstName: "Anshuman",
    lastName: "Aziz",
    gender: "male",
    phone: 3711659105,
    dob: "19950811"
  }

  // Get the above particular patients's details from API Call

  const Item = styled(Paper)(({ theme }) => ({
    borderTop: `1px solid #CCC`,
    borderRadius: 0,
    padding: theme.spacing(1),
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    transition: '0.1s',
    '&:hover': {
      transform: 'scale(1.01)'
    },
    '& > *': {
      textDecoration: 'none',
      fontStyle: 'normal'
    }
  }));

  const sidebarMenu = [
    {
      title: 'Edit Profile',
      path: `/patient/edit-profile/${id}`
    },
    {
      title: 'Add Invoice',
      path: `/patient/add-invoice/${id}`
    },
    {
      title: 'Add Token',
      path: `/patient/add-token/${id}`
    },
    {
      title: 'Add File',
      path: `/patient/add-file/${id}`
    },
    {
      title: 'Invoice History',
      path: `/patient/invoice-history/${id}`
    }
  ]

  return (
    <Grid container spacing={1} sx={{ padding: '0.5rem' }}>
      <Grid item xs={2}>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <PatientProfile id={id!} mrNum={patient.mrNum} />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Stack>
              {sidebarMenu.map((menu) => (
                <Link to={menu.path} style={{ textDecoration: 'none' }}>
                  <Item>
                    <ChevronRight sx={{ marginRight: '0.5rem' }} />
                    <Typography variant="body1">{menu.title}</Typography>
                  </Item>
                </Link>
              ))}
            </Stack>
          </Paper>
        </Grid>
        {/* Kept the following section optional for the time being. Will develop later when APIs are ready */}
        {/* <Grid item xs={12} sx={{ border: '1px solid blue', height: '14rem', marginBottom: '1rem' }}>Patient Follow Up</Grid> */}
      </Grid>
      <Grid item xs={5}>
        <PatientInfoCard
          title="MEDICAL HISTORY"
          content="No medical history has been added yet"
          minHeight="14rem"
        />
        <PatientInfoCard
          title="OPD"
          content="Appointment with Dr ABC XYZ on 01/01/2022 Token - 39"
          minHeight="21rem"
        />
        <PatientInfoCard
          title="RECENT FILES"
          content="No files found"
          minHeight="14rem"
        />
      </Grid>
      <Grid item xs={5}>
        <PatientInfoCard
          title="HEALTH RECORDS"
          content="No health record has been added yet."
        />
        <PatientInfoCard
          title="LAST INVOICE"
          content="(Saturday): Consultation Fee: 1000"
        />
        <PatientInfoCard
          title="RECENT COMMUNICATIONS"
          content="No Communications found."
          minHeight="14rem"
        />
        <PatientInfoCard
          title="TREATMENT PLAN"
          content="Not Available."
          minHeight="14rem"
        />
      </Grid>      
    </Grid>
  );
};

export default PatientDetails;
