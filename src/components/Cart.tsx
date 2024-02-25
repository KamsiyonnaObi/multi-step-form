import React, { useState, useEffect } from "react";
import { Paper, Button } from "@mui/material";
import { formatPrice } from "../../utils/utils";
import { useSubTypeStore, useCartStore, useStepStore } from "../store";

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { isYearly } = useSubTypeStore();
  const { plan, addOns } = useCartStore();
  const { setCurrentStep } = useStepStore();

  useEffect(() => {
    let totalPrice = plan.price;
    addOns.forEach((addOn) => {
      totalPrice += addOn.price;
    });
    setTotalPrice(totalPrice);
  }, [addOns]);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "var(--magnolia)",
          padding: "12px",
          borderRadius: "8px",
        }}
      >
        <div className="cart-container">
          <div>
            <p className="zero-margin summary-header">{`${plan.name} (${
              isYearly ? "Yearly" : "Monthly"
            })`}</p>
            <Button
              size="large"
              variant="text"
              onClick={() => {
                setCurrentStep(2);
              }}
              sx={{
                fontSize: "14px",
                padding: "0",
                justifyContent: "flex-start",
                backgroundColor: "transparent",
                color: " var(--cool-gray)",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                  color: "var(--purplish-blue)",
                  backgroundColor: "transparent",
                },
              }}
            >
              Change
            </Button>
          </div>
          <p className="zero-margin summary-header">
            {formatPrice(plan.price, isYearly)}
          </p>
        </div>
        {addOns.length > 0 && (
          <div
            style={{
              border: "1px solid var(--light-gray)",
              marginBottom: "8px",
            }}
          ></div>
        )}
        {addOns.length > 0 &&
          addOns.map((addOn) => {
            return (
              <div className="cart-container" key={addOn.id}>
                <p className="zero-margin summary-text">{addOn.name}</p>
                <p className="zero-margin summary-addOn-price ">{`+${formatPrice(
                  addOn.price,
                  isYearly
                )}`}</p>
              </div>
            );
          })}
      </Paper>
      <div className="total-container">
        <p className="grey-text">{`Total (per ${
          isYearly ? "year" : "month"
        })`}</p>
        <p className="total-price">{`+${formatPrice(totalPrice, isYearly)}`}</p>
      </div>
    </>
  );
};
