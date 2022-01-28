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
  return (
    <div className="App">
      <Header name="Cathy" />
      <main>
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
