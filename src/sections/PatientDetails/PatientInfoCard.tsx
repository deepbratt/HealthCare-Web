import React from "react";
import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";

interface IProps {
  minHeight?: string;
  title: string;
  content: string;
}

const PatientInfoCard: React.FC<IProps> = ({ minHeight, title, content }) => {
  return (
    <Grid item xs={12} sx={{ marginBottom: '1rem' }}>
      <Paper elevation={2} sx={{ borderRadius: '8px' }}>
        <Card variant="outlined" sx={{ borderRadius: '8px', minHeight: minHeight ? minHeight: 'auto' }}>
          <CardHeader
            sx={{ backgroundColor: '#EEE', padding: '0.5rem 1rem' }}
            title={title}
            titleTypographyProps={{
              variant: 'body1'
            }}
          />
          <CardContent>
            <Typography variant="subtitle2">
              {content}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default PatientInfoCard;
