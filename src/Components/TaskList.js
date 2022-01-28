function TaskList({ tasks }) {
  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <h3 key={task.id}>{task.title}</h3>
      ))}
    </div>
  );
}

export default TaskList;
