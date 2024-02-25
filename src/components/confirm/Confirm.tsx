import React from "react";

export const Confirm = () => {
  return (
    <>
      <div className=" confirm-container flex-col-center items-center">
        <img
          style={{ margin: "12px 0" }}
          src="../../../assets/images/icon-thank-you.svg"
          height="56"
          width={56}
          alt="checkmark"
        />
        <h1>Thank you!</h1>
        <p className="price-text text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
};
