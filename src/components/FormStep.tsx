import React from "react";
import { PersonalInfo } from "./personalInfo/PersonalInfo";
import { SelectPlan } from "./selectPlan/SelectPlan";
import { AddOns } from "./addOns/AddOns";

interface FormStepProps {
  currentStep: number;
}
const FormStep = ({ currentStep }: FormStepProps) => {
  switch (currentStep) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <AddOns />;
    case 4:
      return <div>Summary</div>;
    default:
      return <PersonalInfo />;
  }
};

export default FormStep;
