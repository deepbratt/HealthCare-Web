import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogBox from '../../components/Modal/DialogBox';
import InputAdornment from "@mui/material/InputAdornment";
import AccountantsListingTable from './AccountantListingTable';
import { SearchRounded } from '@mui/icons-material';
//* Add data/utils import below this comment
import { IAccountant } from '../../utils/interfaces/accountant.interface';
import { ADD, ACCOUNTANT } from '../../utils/langauge/en/buttonLabels';

const AccountantUser: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rowData] = useState<IAccountant[]>([
    {
      _id: uuidv4(),
      name: "Shafique Khan",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Jamil Khan",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Naseem Khan",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Javed Khan",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
  ]);
  return (
    <Box sx={{ marginTop: "1rem" }}>
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
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="flex-end"
            alignContent="center"
          >
            <Button size="small" variant="contained" onClick={handleClickOpen}>
              {ADD + " " + ACCOUNTANT}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <AccountantsListingTable rowData={rowData} />
        </Grid>
      </Grid>
      <DialogBox
        open={open}
        handleClose={handleClose}
        title={`${ADD} ${ACCOUNTANT}`}
      >
        {/* // TODO: ADD ACCOUNTANT FORM HERE  */}
        <h1>Add New Accountant Form Here</h1>
      </DialogBox>
    </Box>
  );
}

export default AccountantUser;