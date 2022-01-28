import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete }) {
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
      <p>Completed: </p>
    </div>
  );
}

export default Task;
