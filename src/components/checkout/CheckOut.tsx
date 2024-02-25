import React from "react";
import { Cart } from "../Cart";

export const CheckOut = () => {
  return (
    <>
      <h1>Finishing up</h1>
      <p className="grey-text">
        Double-check everything looks OK before confirming.
      </p>
      <div className="plan-container">
        <Cart />
      </div>
    </>
  );
};
