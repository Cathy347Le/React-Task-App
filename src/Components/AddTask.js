import { useState } from "react";
import "./AddTask.scss";

function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);

  return (
    <form className="add-new-task-form">
      <div className="form-ctrl">
        <label for="title">
          Title:
          <input
            type="text"
            id="title"
            name="task_title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="form-ctrl">
        <label for="date">
          Date:
          <input
            type="text"
            id="date"
            name="task_date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <input className="form-button" type="submit" value="Add New Task" />
    </form>
  );
}

export default AddTask;
