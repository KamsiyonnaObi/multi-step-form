import React from "react";
import { steps } from "../../constants/steps";

interface Step {
  id: number;
  name: string;
}

interface StageProps {
  stage: number;
  isMobile?: boolean; // flag to render on desktop or mobile
}

const Stage = ({ stage, isMobile = true }: StageProps) => {
  const renderMobileStage = () => (
    <div className="stage-container">
      {steps.map((step: Step) => (
        <div
          key={step.id}
          className={`stage ${stage === step.id ? "selected-stage" : ""}`}
        >
          {step.id}
        </div>
      ))}
    </div>
  );

  const renderDesktopStage = () => (
    <div className="desktop-stage">
      {steps.map((step: Step) => (
        <div className="desktop-step" key={step.id}>
          <div className={`stage ${stage === step.id ? "selected-stage" : ""}`}>
            {step.id}
          </div>

          <div>
            <p className="step-text font-reg zero-margin">{`STEP ${step.id}`}</p>
            <p className="step-text zero-margin">{step.name}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return isMobile ? renderMobileStage() : renderDesktopStage();
};

export default Stage;
