import { FaTimes, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

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
        {task.completed === false ? (
          <FaTimesCircle
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onToggleCompleted(task.id)}
          />
        ) : (
          <FaCheckCircle
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => onToggleCompleted(task.id)}
          />
        )}
      </p>
    </div>
  );
}

export default Task;
