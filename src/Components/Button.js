import React from "react";
import "./Button.scss";

function Button({ color, text }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

export default Button;
