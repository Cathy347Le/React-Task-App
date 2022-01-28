import Task from "./Task";

function TaskList({ tasks, onDelete, onToggleCompleted }) {
  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </div>
  );
}

export default TaskList;
