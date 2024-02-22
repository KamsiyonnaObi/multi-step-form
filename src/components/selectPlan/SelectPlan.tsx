import React, { useState } from "react";
import { Button, styled } from "@mui/material";

import { formatPrice } from "../../../utils/utils";

export const SelectPlan = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  // Data for each plan
  const plans = [
    {
      id: 2,
      name: "Arcade",
      price: 9,
      image: "../../../assets/images/icon-arcade.svg",
    },
    {
      id: 3,
      name: "Advanced",
      price: 12,
      image: "../../../assets/images/icon-advanced.svg",
    },
    {
      id: 4,
      name: "Pro",
      price: 15,
      image: "../../../assets/images/icon-pro.svg",
    },
  ];
  // create reusable button
  const PlanButton = styled(Button)(() => ({
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
            onClick={() => handleButtonClick(plan.id)}
          >
            <div style={{ display: "flex", gap: "12px" }}>
              <img src={plan.image} alt={plan.name} />
              <div className="flex-col-center">
                <h3 className="zero-margin">{plan.name}</h3>
                <p className="zero-margin price-text">
                  {formatPrice(plan.price)}
                </p>
              </div>
            </div>
          </PlanButton>
        ))}
      </div>
      <div>Monthly or Yearly</div>
    </>
  );
};
