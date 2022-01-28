import { buildQueries } from "@testing-library/react";
import React from "react";
import "./Button.scss";

function Button({ color, text }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

Button.defaultProps = {
  color: "#4b7bec",
  text: "Need Button Text",
};

export default Button;
