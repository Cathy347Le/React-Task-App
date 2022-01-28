import { FaTimes, FaTimesCircle } from "react-icons/fa";

function Task({ task, onDelete, onToggleCompleted }) {
  return (
    <div className="task-item">
      <h5>
        {task.title}{" "}
        <FaTimes
          className="close-icon"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h5>
      <p>{task.date}</p>
      <p className="toggle-completed">
        Completed:{" "}
        <FaTimesCircle
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onToggleCompleted(task.id)}
        />
      </p>
    </div>
  );
}

export default Task;
