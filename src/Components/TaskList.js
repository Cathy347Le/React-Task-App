import React from "react";

const taskData = [
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
];

function TaskList() {
  return (
    <div class="task-list-container">
      {taskData.map((task) => (
        <h3>{task.title}</h3>
      ))}
    </div>
  );
}

export default TaskList;
