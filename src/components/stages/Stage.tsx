import React from "react";

const Stage = ({ stage }: { stage: number }) => {
  return (
    <div className="stage-container">
      {[1, 2, 3, 4].map((number) => (
        <div
          key={number}
          className={`stage ${stage === number ? "selected-stage" : ""}`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default Stage;
