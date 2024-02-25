import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stage from "./components/stages/Stage";
import FormStep from "./components/FormStep";

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
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
            <FormStep currentStep={currentStep} />
          </section>
        </Paper>
      </section>
      {/* Mobile Footer */}
      <div className="mobile-footer">
        {!(currentStep === 1) && (
          <Button variant="text" onClick={handlePrevStep}>
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
            onClick={() => {
              alert("I've been clicked");
            }}
            sx={{ backgroundColor: "var(--purplish-blue)", marginLeft: "auto" }}
          >
            Confirm
          </Button>
        )}
      </div>
    </>
  );
};

export default App;
