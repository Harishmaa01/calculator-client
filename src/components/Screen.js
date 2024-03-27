import React from "react";
// import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <span className="screen" mode="single" max={70}>
      {value}
    </span>
  );
};

export default Screen;