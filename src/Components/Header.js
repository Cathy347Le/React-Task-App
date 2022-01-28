import React from "react";
import Button from "./Button";

function Header({ name }) {
  return (
    <header className="app-header">
      <h1>{name}'s Task Tracker</h1>
      <Button color="#5f27cd" text="Add New Ask" />
    </header>
  );
}

export default Header;
