import { FaTimes } from "react-icons/fa";

function Task({ task }) {
  return (
    <div className="task-item">
      <h5>
        {task.title}{" "}
        <FaTimes
          className="close-icon"
          style={{ color: "red", cursor: "pointer" }}
        />
      </h5>
      <p>{task.date}</p>
      <p>Completed: </p>
    </div>
  );
}

export default Task;
