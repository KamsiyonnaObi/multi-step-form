import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stage from "./components/stages/Stage";
import FormStep from "./components/FormStep";
import { Confirm } from "./components/confirm/Confirm";
import { useStepStore } from "./store";

const App = () => {
  const [isFormComplete, setIsFormComplete] = React.useState(false);
  const { currentStep, incStep, decStep } = useStepStore();
  const handleNextStep = () => {
    incStep();
  };
  const handlePrevStep = () => {
    decStep();
  };
  const handleConfirm = () => {
    setIsFormComplete(true);
  };
  return (
    <>
      <div>
        <img src="../assets/images/bg-sidebar-mobile.svg" alt="header-image" />
      </div>
      <section className="form-container">
        <Stage stage={currentStep} />

        <Paper sx={{ margin: "0 20px", borderRadius: "8px" }}>
          <section className="step-container">
            {isFormComplete ? (
              <Confirm />
            ) : (
              <FormStep currentStep={currentStep} />
            )}
          </section>
        </Paper>
      </section>
      {/* Mobile Footer */}
      {!isFormComplete && (
        <div className="mobile-footer">
          {!(currentStep === 1) && (
            <Button
              size="large"
              variant="text"
              onClick={handlePrevStep}
              sx={{
                backgroundColor: "transparent",
                color: " var(--cool-gray)",
                "&:hover": {
                  color: "var(--marine-blue)",
                  backgroundColor: "transparent",
                },
              }}
            >
              Go Back
            </Button>
          )}
          {currentStep != 4 && (
            <Button
              variant="contained"
              onClick={handleNextStep}
              sx={{ marginLeft: "auto" }}
            >
              Next Step
            </Button>
          )}
          {currentStep === 4 && (
            <Button
              variant="contained"
              size="large"
              onClick={handleConfirm}
              sx={{
                backgroundColor: "var(--purplish-blue)",
                marginLeft: "auto",
              }}
            >
              Confirm
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default App;
