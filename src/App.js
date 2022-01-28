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
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header name="Cathy" />
      <main>
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} onDelete={handleDelete} />
        ) : (
          "Hooray you have no more tasks."
        )}
      </main>
    </div>
  );
}

export default App;
