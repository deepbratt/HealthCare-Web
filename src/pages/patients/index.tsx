import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import PatientsListingTable from "../../sections/Patients/PatientsListingTable";
import { Grid, Box, Stack, TextField, Autocomplete, InputAdornment, Button, styled, alpha } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Add } from "@mui/icons-material";

const PatientsPage: React.FC = () => {
  const { patientsData } = useContext(UserContext)

  const SearchButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: '100%',
    margin: 0,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.85)
    }
  }))
  return (
    <Box>
      <Grid container sx={{ padding: '0 0 2rem', margin: '0.25rem auto' }}>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Stack spacing={2} sx={{ width: 410, margin: '0.5rem auto' }}>
            <Autocomplete
              freeSolo
              size="small"
              sx={{ borderRadius: '12px', boxShadow: '4px 4px 4px 2px rgba(0,0,0,0.15)' }}
              id="free-solo-2-demo"
              disableClearable
              options={patientsData!.map((option) => option.firstName + ' ' + option.lastName)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Search by Name, MR#, Phone or Email..."
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchButton>
                          <SearchIcon />
                        </SearchButton>
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Stack>
          <Button variant="text" size="small">
            Advanced Search
          </Button>
        </Grid>
        <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button variant="contained" endIcon={<Add />}>
            Add Patients
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} lg={10}>
          <PatientsListingTable rowData={patientsData} />
        </Grid>
      </Grid>
    </Box>
  )
};

export default PatientsPage;
