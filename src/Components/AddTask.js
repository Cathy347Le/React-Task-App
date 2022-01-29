import { useState } from "react";
import "./AddTask.scss";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);

  //Have an onSubmit method to do form validation before onAddTask is called.
  const onSubmit = (e) => {
    e.preventDefault(); //Don't want to submit right away, or go to another page. Prevent the default action
    if (!title || !date) {
      alert("Form requires a title and date");
      return;
    }

    //Data we have captured
    onAddTask({ title, date, completed });

    //After submit button is clicked, clear the form data
    setTitle("");
    setDate("");
    setCompleted(false);
  };

  return (
    <form className="add-new-task-form" onSubmit={onSubmit}>
      <div className="form-ctrl">
        <label htmlFor="title">
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
        <label htmlFor="date">
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
