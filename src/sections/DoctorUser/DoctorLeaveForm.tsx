import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import InputField from "../../components/InputFields";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";
import { AppointmentFormContext } from "../../context/AppointmentFormContext";
//* Add data/utils import below this comment
import { ADD, LEAVE } from "../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../utils/constants/formConstants";
import { IDoctor } from "../..//utils/interfaces/doctor.interface";

const AddEditDoctorLeaveForm: React.FC = () => {
  const {
    values,
    doctorsList,
    handleInputChange,
    handleDateRangeChange,
    handleSubmit,
  } = useContext(AppointmentFormContext);
  return (
    <Box sx={{ margin: "20px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            size="small"
            id="search-doctor"
            name={fieldNames.doctorID}
            value={values.doctorID}
            label="Search Doctor"
            onChange={handleInputChange}
            sx={{ minWidth: "300px" }}
          >
            {doctorsList.map((option: IDoctor) => (
              <MenuItem key={option._id} value={option._id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} lg={8}>
          <DateRangePicker
            open={true}
            toggle={() => {}}
            onChange={(range: DateRange) => handleDateRangeChange(range)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            fullWidth
            multiline
            rows={3}
            maxRows={3}
            size="small"
            id="leave-comment"
            name={fieldNames.comments}
            value={values.comments}
            label="Comment"
            onChange={handleInputChange}
            sx={{ minWidth: "300px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            {ADD} {LEAVE}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddEditDoctorLeaveForm;
