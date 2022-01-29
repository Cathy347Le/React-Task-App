import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";
import About from "./Components/About";
import Notes from "./Components/Notes";
import "./App.scss";

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleShowAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  const handleAddTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1; // Generate a random id number
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    // console.log("test delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDeleteAllTask = () => {
    // console.log(tasks);
    // console.log(tasks.length);
    setTasks(tasks.length === 0);
  };

  const handleToggleCompleted = (id) => {
    // console.log("test toggle", id);
    // Make sure correct task item is targeted (id match check), if id matches, copy the task (...), but change the completed property to the opposite. Otherwise no change.
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Header
          name="Cathy"
          onShowAddTaskForm={handleShowAddTaskForm}
          onAddTaskButtonToggle={showAddTaskForm}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showAddTaskForm && <AddTask onAddTask={handleAddTask} />}
                  {tasks.length > 0 ? (
                    <TaskList
                      tasks={tasks}
                      onDelete={handleDelete}
                      onToggleCompleted={handleToggleCompleted}
                      onDeleteAllTask={handleDeleteAllTask}
                    />
                  ) : (
                    <p className="no-tasks-msg text-center">
                      Hooray you have no more tasks.
                    </p>
                  )}
                </>
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/Notes" element={<Notes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
