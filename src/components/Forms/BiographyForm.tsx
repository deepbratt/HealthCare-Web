import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from "@mui/material/FormLabel";
import InputField from "../InputFields";
//* Add data/utils import below this comment
import { DOCTOR, STAFF, BIOGRAPHY } from "../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../utils/constants/formConstants";
import { IUserFormValues,IUserFormErrors } from "../../context/UserFormContext";

interface IBiographyFormProps {
  TITLE: "DOCTOR" | "STAFF" | "ACCOUNTANT" | "ADMIN";
  values: IUserFormValues;
  errors: IUserFormErrors;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

const BiographyForm: React.FC<IBiographyFormProps> = ({
  TITLE,
  values,
  errors,
  handleInputChange,
}) => {
  return (
    <Box sx={{ margin: "50px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" component="h1">
            {TITLE} {BIOGRAPHY}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id={`${TITLE.toLowerCase()}-name`}
            placeholder="John Doe"
            label={"Name"}
            name={fieldNames.name}
            value={values.name}
            error={errors.name !== "" ? true : false}
            helperText={errors.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <FormControl>
            <FormLabel id={`${TITLE.toLowerCase()}-gender`}>
              {"Gender"}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby={`${TITLE.toLowerCase()}-gender`}
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
            id={`${TITLE.toLowerCase()}-phone`}
            type="tel"
            placeholder="+92345678901"
            label={"Phone"}
            error={errors.phone !== "" ? true : false}
            helperText={errors.phone}
            name={fieldNames.phone}
            value={values.phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id={`${TITLE.toLowerCase()}-email`}
            type="email"
            placeholder="johndoe@abc.com"
            label={"Email"}
            error={errors.email !== "" ? true : false}
            helperText={errors.email}
            name={fieldNames.email}
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id={`${TITLE.toLowerCase()}-password`}
            type="password"
            label={"Password"}
            error={errors.password !== "" ? true : false}
            helperText={errors.password}
            name={fieldNames.password}
            value={values.password}
            onChange={handleInputChange}
          />
        </Grid>
        {TITLE === DOCTOR && (
          <Grid item xs={12} lg={10} container spacing={1}>
            <Grid item xs={12} lg={6}>
              <InputField
                id={`${TITLE.toLowerCase()}-consultation-fee`}
                label={"Consultation Fee"}
                error={errors.consultationFee !== "" ? true : false}
                helperText={errors.consultationFee}
                name={fieldNames.consultationFee}
                value={values.consultationFee}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <InputField
                id={`${TITLE.toLowerCase()}-share-price`}
                label={"Share Price"}
                error={errors.sharePrice !== "" ? true : false}
                helperText={errors.sharePrice}
                name={fieldNames.sharePrice}
                value={values.sharePrice}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        )}
        {TITLE === STAFF && (
          <Grid item xs={12} lg={10} container spacing={1}>
            
            <Grid item xs={12} lg={6}>
              <InputField
                id={`${TITLE.toLowerCase()}-discount`}
                label={"Discount"}
                error={errors.discount !== "" ? true : false}
                helperText={errors.discount}
                name={fieldNames.discount}
                value={values.discount}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BiographyForm;
