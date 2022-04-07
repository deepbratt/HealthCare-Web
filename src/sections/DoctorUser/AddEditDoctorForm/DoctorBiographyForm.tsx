import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from "@mui/material/FormLabel";
import InputField from "../../../components/InputFields";
import { DoctorFormContext } from "../../../context/DoctorFormContext";
//* Add data/utils import below this comment
import { DOCTOR, BIOGRAPHY } from "../../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../../utils/formConstants";

const DoctorBiographyForm: React.FC = () => {
  const { values, handleInputChange } = useContext(DoctorFormContext);
  return (
    <Box sx={{ margin: "50px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" component="h1">
            {DOCTOR} {BIOGRAPHY}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-name"
            placeholder="John Doe"
            label={"Name"}
            name={fieldNames.name}
            value={values.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <FormControl>
            <FormLabel id="doc-gender">
              {"Gender"}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="doc-gender"
              defaultValue="male"
              name={fieldNames.gender}
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-phone"
            type="tel"
            placeholder="+92345678901"
            label={"Phone"}
            name={fieldNames.phone}
            value={values.phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-email"
            type="email"
            placeholder="johndoe@abc.com"
            label={"Email"}
            name={fieldNames.email}
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-password"
            type="password"
            label={"Password"}
            name={fieldNames.password}
            value={values.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10} container spacing={1}>
          <Grid item xs={12} lg={6}>
            <InputField
              id="doc-consultation-fee"
              label={"Consultation Fee"}
              name={fieldNames.consultationFee}
              value={values.consultationFee}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputField
              id="doc-share-price"
              label={"Share Price"}
              name={fieldNames.sharePrice}
              value={values.sharePrice}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorBiographyForm;
