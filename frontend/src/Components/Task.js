import { FaTimes, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Task({ task, onDelete, onToggleCompleted }) {
  // RENDERING CLASSES DYNAMICALLY
  //   const getTaskItemClasses = () => {
  //     let taskItemClasses = "task-item";
  //     return (taskItemClasses += task.completed ? " completed" : "");
  //     return task.completed ? (taskItemClasses += " completed") : taskItemClasses;
  //     if (task.completed === true) {
  //       taskItemClasses += " completed";
  //     }
  //     return taskItemClasses;
  //   };

  return (
    // <div className={getTaskItemClasses()}>
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h5>
        {task.title}{' '}
        <FaTimes
          className="close-icon"
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task._id)}
        />
      </h5>
      <p>{task.date}</p>
      <p className="toggle-completed">
        Completed:{' '}
        {task.completed === false ? (
          <FaTimesCircle
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onToggleCompleted(task._id)}
          />
        ) : (
          <FaCheckCircle
            style={{ color: 'green', cursor: 'pointer' }}
            onClick={() => onToggleCompleted(task._id)}
          />
        )}
      </p>
      <Link style={{ fontSize: '12px' }} to={`/task/${task._id}`}>
        {' '}
        Show More Details
      </Link>
    </div>
  );
}

export default Task;
