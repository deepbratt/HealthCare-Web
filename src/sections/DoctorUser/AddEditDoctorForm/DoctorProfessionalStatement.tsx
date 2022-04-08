import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputField from "../../../components/InputFields";
import { UserFormContext } from "../../../context/UserFormContext";
//* Add data/utils import below this comment
import { DOCTOR, PROFESSIONAL_STATEMENT } from "../../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../../utils/constants/formConstants";

const DoctorProfessionalStatementForm: React.FC = () => {
  const { values, errors, handleInputChange } = useContext(UserFormContext);
  return (
    <Box sx={{ margin: "50px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" component="h1">
            {DOCTOR} {PROFESSIONAL_STATEMENT}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-awards"
            label={"Awards"}
            name={fieldNames.awards}
            value={values.awards}
            error={errors.awards !== "" ? true : false}
            helperText={errors.awards}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-expertise"
            label={"Expertise"}
            error={errors.expertise !== "" ? true : false}
            helperText={errors.expertise}
            name={fieldNames.expertise}
            value={values.expertise}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-languages"
            label={"Languages"}
            error={errors.languages !== "" ? true : false}
            helperText={errors.languages}
            name={fieldNames.languages}
            value={values.languages}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} lg={10}>
          <InputField
            id="doc-experience"
            label={"Experience"}
            error={errors.experience !== "" ? true : false}
            helperText={errors.experience}
            name={fieldNames.experience}
            value={values.experience}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorProfessionalStatementForm;
