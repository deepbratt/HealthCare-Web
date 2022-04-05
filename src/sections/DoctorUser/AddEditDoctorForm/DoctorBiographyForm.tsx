import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { DoctorFormContext } from "../../../context/DoctorFormContext";
//* Add data/utils import below this comment
import { DOCTOR, BIOGRAPHY } from "../../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../../utils/formConstants";

const DoctorBiographyForm: React.FC = () => {
  const { values, handleInputChange } = useContext(DoctorFormContext);
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} lg={10}>
        <Typography variant="h1">
          {DOCTOR} {BIOGRAPHY}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={10} container justifyContent="center">
        <FormControl>
          <InputLabel htmlFor="doc-name">{fieldNames.name}</InputLabel>
          <Input
            id="doc-name"
            aria-describedby="my-helper-text"
            name={fieldNames.name}
            value={values.name}
            onChange={handleInputChange}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default DoctorBiographyForm;
