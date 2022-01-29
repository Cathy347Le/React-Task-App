import React from "react";
import Button from "./Button";

function Header({ name, onShowAddTaskForm }) {
  return (
    <header className="app-header">
      <h1>{name}'s Task Tracker</h1>
      <Button color="#8854d0" text="Add New Task" onClick={onShowAddTaskForm} />
    </header>
  );
}

export default Header;
