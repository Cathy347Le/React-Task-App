function Task({ task }) {
  return (
    <div className="task-item">
      <h5>{task.title}</h5>
      <p>{task.date}</p>
      <p>Completed: </p>
    </div>
  );
}

export default Task;
