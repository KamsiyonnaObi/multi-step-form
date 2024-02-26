import React from "react";
import Button from "@mui/material/Button";

import { useStepStore } from "../store";

interface FooterProps {
  isFormComplete: boolean;
  isMobile?: boolean;
  setIsFormComplete: (arg: boolean) => void;
}

const Footer = ({
  isFormComplete,
  isMobile = false,
  setIsFormComplete,
}: FooterProps) => {
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
      {/* Desktop Footer */}
      {!isFormComplete && (
        <div className={`${isMobile ? "mobile-footer" : "desktop-footer"}`}>
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

export default Footer;
