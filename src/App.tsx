import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stage from "./components/stages/Stage";

const App = () => {
  return (
    <>
      <div>
        <img src="../assets/images/bg-sidebar-mobile.svg" alt="header-image" />
      </div>
      <section className="form-container">
        <Stage />
        <Paper sx={{ margin: "0 24px", borderRadius: "8px" }}>
          <section className="step-container">
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
          </section>
        </Paper>
      </section>
      {/* Mobile Footer */}
      <div className="mobile-footer">
        <Button
          variant="text"
          onClick={() => {
            alert("I've been clicked");
          }}
          sx={{ display: "none" }}
        >
          Go Back
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            alert("I've been clicked");
          }}
          sx={{ marginLeft: "auto" }}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default App;
