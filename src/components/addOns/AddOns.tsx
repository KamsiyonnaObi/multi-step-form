import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { PlanButton } from "../selectPlan/SelectPlan";
import { formatPrice } from "../../../utils/utils";
import { useSubTypeStore } from "../../store/useSubTypeStore";
import { Plan, useCartStore } from "../../store/useCartStore";
import { planAddOns } from "../../constants";

export const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const { isYearly } = useSubTypeStore();
  const { addOns, setAddOns } = useCartStore();

  const handleAddOnClick = (id: number, newPlan: Plan) => {
    setAddOns(newPlan);
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((addOnId) => addOnId !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  return (
    <>
      <h1>Pick add-ons</h1>
      <p className="grey-text">Add-ons help enhance your gaming experience.</p>
      <div className="plan-container">
        {" "}
        {planAddOns.map((addOn) => (
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
            onClick={() => handleAddOnClick(addOn.id, addOn)}
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
                  checked={addOns.includes(addOn)}
                  onChange={() => handleAddOnClick(addOn.id, addOn)}
                />
                <div className="flex-col-center justify-center padding-top">
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
