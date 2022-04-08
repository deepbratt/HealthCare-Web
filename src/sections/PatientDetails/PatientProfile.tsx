import React from "react";
import { MoreVert, PermIdentity, PhoneAndroid, Tag } from "@mui/icons-material";
import { Avatar, Button, Card, CardContent, CardHeader, Grid, IconButton, Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

interface IProps {
  id: string;
  mrNum: string;
}

const PatientProfile: React.FC<IProps> = ({ id, mrNum }) => {
  return (
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
                {mrNum}
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
  );
};

export default PatientProfile;
