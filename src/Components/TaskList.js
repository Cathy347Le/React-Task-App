import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
