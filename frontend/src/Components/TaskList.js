import Task from './Task';
import Button from './Button';

function TaskList({ tasks, onDelete, onToggleCompleted, onDeleteAllTask }) {
  return (
    <div className="task-list-wrapper">
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            onDelete={onDelete}
            onToggleCompleted={onToggleCompleted}
          />
        ))}
      </div>
      <Button text="Delete All Task" onClick={() => onDeleteAllTask(tasks)} />
    </div>
  );
}

export default TaskList;
