import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AdminsListingTable from './AdminListingTable';
import { SearchRounded } from '@mui/icons-material';
//* Add data/utils import below this comment
import { IAdmin } from '../../utils/interfaces/admin.interface';
import { ADD, ADMIN } from '../../utils/langauge/en/buttonLabels';
import { paths } from '../../routes/paths';

const AdminUser: React.FC = () => {

  const navigate = useNavigate();
 
  const [rowData] = useState<IAdmin[]>([
    {
      _id: uuidv4(),
      name: "Dr. Shafique Khan",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Dr. Jamil Khan",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Dr. Naseem Khan",
      phone: "0322112222",
      email: "naseem@gmail.com",
      lastSignedIn: "12/12/2020",
    },
    {
      _id: uuidv4(),
      name: "Dr. Javed Khan",
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
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate(paths.addEditAdmin)}
            >
              {ADD + " " + ADMIN}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={10}>
          <AdminsListingTable rowData={rowData} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminUser;