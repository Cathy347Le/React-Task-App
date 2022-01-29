function AddTask() {
  return (
    <form className="add-new-task-form">
      <div className="form-control">
        <label for="title">
          Title: <input type="text" id="title" name="task_title" />
        </label>
      </div>
      <div className="form-control">
        <label for="date">
          Date: <input type="text" id="date" name="task_date" />
        </label>
      </div>
      <input type="submit" value="Add New Task" />
    </form>
  );
}

export default AddTask;
