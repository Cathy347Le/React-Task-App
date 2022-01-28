import React, { useState } from "react";

function TaskList() {
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
    <div className="task-list-container">
      {tasks.map((task) => (
        <h3 key={task.id}>{task.title}</h3>
      ))}
    </div>
  );
}

export default TaskList;
