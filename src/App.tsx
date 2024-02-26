import React from "react";
import Paper from "@mui/material/Paper";
import Stage from "./components/stages/Stage";
import FormStep from "./components/FormStep";
import { Confirm } from "./components/confirm/Confirm";
import { useStepStore } from "./store";
import Footer from "./components/Footer";

const App = () => {
  const [isFormComplete, setIsFormComplete] = React.useState(false);
  const { currentStep } = useStepStore();

  return (
    <>
      <div>
        <img
          className="mobile-header-image"
          src="../assets/images/bg-sidebar-mobile.svg"
          alt="header-image"
        />
      </div>
      <section className="form-container">
        <Stage stage={currentStep} />

        <Paper sx={{ margin: "0 20px", borderRadius: "8px" }}>
          <section className="step-container">
            <div>
              <img
                className="desktop-header-image"
                src="../assets/images/bg-sidebar-desktop.svg"
                alt="header-image"
              />
            </div>
            <div className="flex-col-center">
              <div className="desktop-form-container">
                {isFormComplete ? (
                  <Confirm />
                ) : (
                  <FormStep currentStep={currentStep} />
                )}
              </div>
              {/* Desktop Footer */}
              <Footer
                isFormComplete={isFormComplete}
                setIsFormComplete={setIsFormComplete}
              />
            </div>
          </section>
        </Paper>
      </section>
      {/* Mobile Footer */}
      <Footer
        isMobile
        isFormComplete={isFormComplete}
        setIsFormComplete={setIsFormComplete}
      />
    </>
  );
};

export default App;
