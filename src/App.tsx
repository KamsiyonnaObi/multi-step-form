import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stage from "./components/stages/Stage";
import { PersonalInfo } from "./components/personalInfo/PersonalInfo";
import { SelectPlan } from "./components/selectPlan/SelectPlan";
import { AddOns } from "./components/addOns/AddOns";

const App = () => {
  return (
    <>
      <div>
        <img src="../assets/images/bg-sidebar-mobile.svg" alt="header-image" />
      </div>
      <section className="form-container">
        <Stage />
        <Paper sx={{ margin: "0 20px", borderRadius: "8px" }}>
          <section className="step-container">
            {/* <PersonalInfo /> */}
            {/* <SelectPlan /> */}
            <AddOns />
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
