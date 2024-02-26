import React from "react";

export const PersonalInfo = () => {
  return (
    <>
      <div>
        <h1>Personal info</h1>
        <p className="grey-text">
          Please provide your name, email address, and phone number.
        </p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="e.g. Stephen King" />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="text"
            placeholder="e.g. stephenking@lorem.com"
          />
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" placeholder="e.g. +1 234 567 890" />
        </form>
      </div>
    </>
  );
};
