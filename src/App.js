import React, { useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Vaccum home",
      date: "Saturday",
      completed: false,
    },
    {
      id: 2,
      title: "Hang floating shelves",
      date: "Friday",
      completed: false,
    },
    {
      id: 3,
      title: "Wash dishes",
      date: "Friday",
      completed: false,
    },
  ]);

  const handleDelete = (id) => {
    // console.log("test delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
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
    <div className="App">
      <Header name="Cathy" />
      <main>
        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onToggleCompleted={handleToggleCompleted}
          />
        ) : (
          "Hooray you have no more tasks."
        )}
      </main>
    </div>
  );
}

export default App;
