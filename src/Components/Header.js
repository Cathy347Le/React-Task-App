import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import NavBar from './NavBar';

function Header({ name, onShowAddTaskForm, onAddTaskButtonToggle }) {
  const location = useLocation();

  return (
    <header className="app-header">
      <h1>{name}'s Task Tracker</h1>
      <NavBar />
      <div className="task-counter my-4">
        <h6>TASKS REMAINING: 0</h6>
      </div>
      {/* <Button color="#8854d0" text="Add New Task" onClick={onShowAddTaskForm} /> */}
      {location.pathname === '/' && (
        <Button
          color={onAddTaskButtonToggle ? '#fa8231' : '#8854d0'}
          text={onAddTaskButtonToggle ? 'Hide Task Form' : 'Add New Task'}
          onClick={onShowAddTaskForm}
        />
      )}
    </header>
  );
}

export default Header;
