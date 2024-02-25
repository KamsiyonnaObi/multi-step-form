import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Plan } from "../../store/useCartStore";
import { useSubTypeStore } from "../../store/useSubTypeStore";
import { useCartStore } from "../../store/useCartStore";
import { formatPrice } from "../../../utils/utils";
import { plans } from "../../constants";
// create reusable button
export const PlanButton = styled(Button)(() => ({
  border: "1px solid var(--light-gray)",
  backgroundColor: "transparent",
  justifyContent: "flex-start",
  padding: "12px 16px",
  borderRadius: "8px",
  "&:hover": {
    borderColor: "var(--purplish-blue)",
    backgroundColor: "transparent",
  },
}));

export const SelectPlan = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const { isYearly, setIsYearly } = useSubTypeStore();
  const { setPlan } = useCartStore();

  const handleButtonClick = (buttonId: number, plan: Plan) => {
    setSelectedButton(buttonId);
    setPlan(plan);
  };

  const onSwitchChange = () => {
    setIsYearly();
  };

  return (
    <>
      <h1>Select your plan</h1>
      <p className="grey-text">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plan-container">
        {plans.map((plan) => (
          <PlanButton
            key={plan.id}
            sx={{
              backgroundColor:
                selectedButton === plan.id ? "var(--alabaster)" : "transparent",
              borderColor:
                selectedButton === plan.id ? "var(--purplish-blue)" : "",
            }}
            onClick={() => handleButtonClick(plan.id, plan)}
          >
            <div
              style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
            >
              <img src={plan.image} alt={plan.name} />
              <div className="flex-col-center">
                <h3 className="zero-margin">{plan.name}</h3>
                <p className="zero-margin price-text">
                  {formatPrice(plan.price, isYearly)}
                </p>
                {isYearly && (
                  <p className="zero-margin price-text selected-switch">
                    2 months free
                  </p>
                )}
              </div>
            </div>
          </PlanButton>
        ))}
      </div>
      <section className="flex-center switch-container">
        <p
          className={`zero-margin switch-text ${
            !isYearly && "selected-switch"
          }`}
        >
          Monthly
        </p>
        <Switch color="default" checked={isYearly} onChange={onSwitchChange} />
        <p
          className={`zero-margin switch-text ${isYearly && "selected-switch"}`}
        >
          {" "}
          Yearly
        </p>
      </section>
    </>
  );
};
