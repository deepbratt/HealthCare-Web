import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Button, Card, CardContent, CardHeader, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { ChevronRight, MoreVert, PermIdentity, PhoneAndroid, Tag } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/system";

const PatientDetails: React.FC = () => {
  const { id } = useParams();

  const Item = styled(Paper)(({ theme }) => ({
    borderTop: `1px solid #CCC`,
    borderRadius: 0,
    padding: theme.spacing(1),
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  }));

  // Get the above particular patients's details from API Call

  return (
    <Grid container spacing={1} sx={{ padding: '0.5rem' }}>
      <Grid item xs={2}>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Card variant="outlined" sx={{ borderRadius: '8px', minHeight: '14rem' }}>
              <CardHeader
                sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
                avatar={
                  <Avatar sx={{ backgroundColor: blue[500] }} aria-label="profile-photo" />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title="Anshuman Aziz"
                subheader="Male"
                titleTypographyProps={{
                  variant: 'body1'
                }}
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={2}>
                    <Tag />
                  </Grid>
                  <Grid item xs={10} sx={{ alignSelf: 'center' }}>
                    <Typography variant="subtitle2">
                      MMC-163153
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <PermIdentity />
                  </Grid>
                  <Grid item xs={10} sx={{ alignSelf: 'center' }}>
                    <Typography variant="subtitle2">
                      {id}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <PhoneAndroid />
                  </Grid>
                  <Grid item xs={10} sx={{ alignSelf: 'center' }}>
                    <Typography variant="subtitle2">
                      +92 3711659105
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{ marginTop: "1rem", justifyContent: "center" }}>
                  <Button size="small" variant="contained">
                    Add Reminder
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
          <Paper elevation={2} sx={{ borderRadius: '8px' }}>
            <Stack>
              {['Edit Profile', 'Add Invoice', 'Add Token', 'Add File', 'Invoice History'].map((menu) => (
                <Item>
                  <ChevronRight sx={{ marginRight: '0.5rem' }} />
                  <Typography variant="body1">{menu}</Typography>
                </Item>
              ))}
            </Stack>
          </Paper>
        </Grid>
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
