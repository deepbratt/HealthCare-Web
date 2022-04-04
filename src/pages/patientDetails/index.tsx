import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";

const PatientDetails: React.FC = () => {
  const { id } = useParams();

  // Get the above particular patients's details from API Call

  return (
    <Grid container spacing={1} sx={{ padding: '0.5rem' }}>
      <Grid item xs={2}>
        <Grid item xs={12} sx={{ border: '1px solid blue', height: '21rem', marginBottom: '1rem' }}>Patient Profile <br />ID: {id}</Grid>
        <Grid item xs={12} sx={{ border: '1px solid blue', height: '21rem', marginBottom: '1rem' }}>Sidebar</Grid>
        <Grid item xs={12} sx={{ border: '1px solid blue', height: '14rem', marginBottom: '1rem' }}>Patient Follow Up</Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                title="MEDICAL HISTORY"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  No medical history has been added yet
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px', minHeight: '21rem' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                title="OPD"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  Appointment with Dr ABC XYZ on 01/01/2022 Token - 39
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                title="RECENT FILES"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  No files found
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                title="HEALTH RECORDS"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  No health record has been added yet.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px', minHeight: '14rem' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                title="LAST INVOICE"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  {`(Saturday): Consultation Fee: 1000`}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px', minHeight: '21rem' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                title="RECENT COMMUNICATIONS"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  No Communications found.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                title="TREATMENT PLAN"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  Not Available.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientDetails;
