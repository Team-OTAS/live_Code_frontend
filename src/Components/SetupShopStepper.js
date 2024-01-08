import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import LiveCodeLogo from "./../assets/images/logo.png";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box } from "@mui/material";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import StepThreeForm from "./StepThreeForm";
import { MultiStepContext } from "../StepContext";

const steps = ["shop", "reply", "receipt"];

export default function SetupShopStepper() {
  const { currentStep } = useContext(MultiStepContext);

  const showStep = (step) => {
    // console.log(step);
    switch (step) {
      case "1":
        return <StepOneForm />;
      case "2":
        return <StepTwoForm />;
      case "3":
        return <StepThreeForm />;
      default:
        return <StepOneForm />;
    }
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ py: { xs: 3, sm: 0 } }}
      >
        {/* ---------Stepper Start -------------------------------------------------------- */}
        <Box sx={{ width: "35%", pt: 5 }}>
          <Stepper
            activeStep={currentStep}
            alternativeLabel
            orientation="horizontal"
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel> </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {/* ---------Stepper End -------------------------------------------------------- */}
        {/* ---------logo start -------------------------------------------------------- */}
        <Grid item xs={2}>
          <img src={LiveCodeLogo} alt="live_code_logo" className="logo" />
        </Grid>
        {/* ---------logo End -------------------------------------------------------- */}
        {showStep(currentStep)}
      </Grid>
    </>
  );
}
