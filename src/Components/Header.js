import React from "react";
import Button from "./Button";

function Header({ name, onShowAddTaskForm, onAddTaskButtonToggle }) {
  return (
    <header className="app-header">
      <h1>{name}'s Task Tracker</h1>
      {/* <Button color="#8854d0" text="Add New Task" onClick={onShowAddTaskForm} /> */}
      <Button
        color={onAddTaskButtonToggle ? "#fa8231" : "#8854d0"}
        text={onAddTaskButtonToggle ? "Hide Task Form" : "Add New Task"}
        onClick={onShowAddTaskForm}
      />
    </header>
  );
}

export default Header;
