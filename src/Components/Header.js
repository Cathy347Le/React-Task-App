import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import NavBar from './NavBar';

function Header({ name, onShowAddTaskForm, onAddTaskButtonToggle, count }) {
  const location = useLocation();

  return (
    <header className="app-header">
      <h1>{name}'s Task Tracker</h1>
      <NavBar />
      {count > 0 && (
        <div className="task-counter my-2">
          <button className="btn btn-success fw-bold pe-none">
            TASKS REMAINING: <span class="badge bg-dark">{count}</span>
          </button>
        </div>
      )}
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
