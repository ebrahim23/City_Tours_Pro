import React from "react";
import "./Toggle.scss";

function Toggle({ toggle }) {
  return (
    <div className="toggle-div">
      <button className="btn" onClick={() => toggle()}>
        Toggle Mode
      </button>
    </div>
  );
}

export default Toggle;
