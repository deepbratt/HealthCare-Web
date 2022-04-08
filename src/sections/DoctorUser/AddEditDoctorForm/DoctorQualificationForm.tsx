import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputField from "../../../components/InputFields";
import { AddRounded } from "@mui/icons-material";
import { UserFormContext } from "../../../context/UserFormContext";
//* Add data/utils import below this comment
import { ADD, QUALIFICATION } from "../../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../../utils/constants/formConstants";

const DoctorQualificationForm: React.FC = () => {
  const { values, handleDynamicInputChange, handleAddNewItem } = useContext(UserFormContext);
  return (
    <Box sx={{ margin: "50px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" component="h1">
            {QUALIFICATION}
          </Typography>
        </Grid>
        {values.qualifications.map((qualification: string, index: number) => (
          <Grid key={uuidv4()} item xs={12} lg={10}>
            <InputField
              id={`doc-qualification-${index}`}
              label={`Qualification ${index + 1}`}
              name={fieldNames.qualifications}
              value={values.qualifications[index]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleDynamicInputChange(e, index)
              }
            />
          </Grid>
        ))}
        <Grid item xs={12} lg={12}>
          <Button
            variant="contained"
            startIcon={<AddRounded />}
            onClick={() => handleAddNewItem(fieldNames.qualifications, "")}
          >{`${ADD} ${QUALIFICATION}`}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorQualificationForm;
