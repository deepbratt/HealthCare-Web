import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//* Add data/utils import below this comment
import {
  BACK,
  SKIP,
  NEXT,
  FINISH,
  RESET,
  OPTIONAL,
  BIOGRAPHY,
  DATA,
  QUALIFICATION,
  SERVICES,
  TIMINGS,
  FAQ,
} from "../../../utils/langauge/en/buttonLabels";

const steps = [
  BIOGRAPHY,
  BIOGRAPHY + " " + DATA,
  QUALIFICATION,
  SERVICES,
  TIMINGS,
  FAQ,
];

const stepContent = [
  <h1>{BIOGRAPHY}</h1>,
  <h1>
    {BIOGRAPHY} {DATA}
  </h1>,
  <h1>{QUALIFICATION}</h1>,
  <h1>{SERVICES}</h1>,
  <h1>{TIMINGS}</h1>,
  <h1>{FAQ}</h1>,
];

const stepAction = [
  () => {
    console.log(BIOGRAPHY);
  },
  () => {
    console.log(BIOGRAPHY + " " + DATA);
  },
  () => {
    console.log(QUALIFICATION);
  },
  () => {
    console.log(SERVICES);
  },
  () => {
    console.log(TIMINGS);
  },
  () => {
    console.log(FAQ);
  },
];

const AddEditDoctorForm: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    stepAction[activeStep]();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1240px",
        margin: "50px",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">{OPTIONAL}</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>{RESET}</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {stepContent[activeStep]}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              {BACK}
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                {SKIP}
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? FINISH : NEXT}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default AddEditDoctorForm;
