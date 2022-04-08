import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputField from "../../../components/InputFields";
import { AddRounded } from "@mui/icons-material";
import { DoctorFormContext } from "../../../context/DoctorFormContext";
//* Add data/utils import below this comment
import { ADD, FAQ } from "../../../utils/langauge/en/buttonLabels";
import { fieldNames } from "../../../utils/constants/formConstants";

const DoctorFAQForm: React.FC = () => {
  const { values, handleDynamicInputChange, handleAddNewItem } = useContext(DoctorFormContext);
  return (
    <Box sx={{ margin: "50px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" component="h1">
            {FAQ}
          </Typography>
        </Grid>
        {values.faqs.map(
          (faq: { question: string; answer: string }, index: number) => (
            <React.Fragment key={uuidv4()}>
              <Grid item xs={12} lg={10}>
                <InputField
                  id={`doc-faq-${index}`}
                  label={`Question ${index + 1}`}
                  name={fieldNames.answer}
                  value={values.faqs[index].question}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleDynamicInputChange(e, index)
                  }
                />
              </Grid>
              <Grid item xs={12} lg={10}>
                <InputField
                  id={`doc-faq-${index}`}
                  label={`Answer ${index + 1}`}
                  name={fieldNames.question}
                  value={values.faqs[index].answer}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleDynamicInputChange(e, index)
                  }
                />
              </Grid>
            </React.Fragment>
          )
        )}
        <Grid item xs={12} lg={12}>
          <Button
            variant="contained"
            startIcon={<AddRounded />}
            onClick={() =>
              handleAddNewItem(fieldNames.faqs, { question: "", answer: "" })
            }
          >{`${ADD} ${FAQ}`}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorFAQForm;
