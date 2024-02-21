import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const App = () => {
  return (
    <>
      <div>
        <img src="../assets/images/bg-sidebar-mobile.svg" alt="header-image" />
      </div>
      <Paper elevation={2} sx={{ margin: "0 24px" }}>
        <section className="step-container">
          <h1>Personal info</h1>
          <p className="grey-text">
            Please provide your name, email address, and phone number.
          </p>
        </section>
      </Paper>
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
