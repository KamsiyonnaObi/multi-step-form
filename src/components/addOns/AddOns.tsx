import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { PlanButton } from "../selectPlan/SelectPlan";
import { formatPrice } from "../../../utils/utils";
import { useSubTypeStore } from "../../store/useSubTypeStore";

export const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([1]);
  const { isYearly } = useSubTypeStore();
  const handleAddOnClick = (id: number) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((addOnId) => addOnId !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };
  const addOns = [
    {
      id: 1,
      name: "Online service",
      price: 1,
      desc: "Access to multiplayer games",
    },
    {
      id: 2,
      name: "Larger storage",
      price: 2,
      desc: "Extra 1TB of cloud save",
    },
    {
      id: 3,
      name: "Customizable profile",
      price: 2,
      desc: "Custom theme on your profile",
    },
  ];
  return (
    <>
      <h1>Pick add-ons</h1>
      <p className="grey-text">Add-ons help enhance your gaming experience.</p>
      <div className="plan-container">
        {" "}
        {addOns.map((addOn) => (
          <PlanButton
            key={addOn.id}
            sx={{
              padding: "8px 0",
              width: "100%",
              backgroundColor: selectedAddOns.includes(addOn.id)
                ? "var(--alabaster)"
                : "transparent",
              borderColor: selectedAddOns.includes(addOn.id)
                ? "var(--purplish-blue)"
                : "",
            }}
            onClick={() => handleAddOnClick(addOn.id)}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  checked={selectedAddOns.includes(addOn.id)}
                  onChange={() => handleAddOnClick(addOn.id)}
                />
                <div className="flex-col-center justify-center">
                  <h3 className="zero-margin addon-header">{addOn.name}</h3>
                  <p className="zero-margin addon-desc">{addOn.desc}</p>
                </div>
              </div>
              <p className="zero-margin addon-price">
                {`+${formatPrice(addOn.price, isYearly)}`}
              </p>
            </div>
          </PlanButton>
        ))}
      </div>
    </>
  );
};
