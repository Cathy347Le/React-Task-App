import { useState, useEffect } from 'react';
import './AddTask.scss';
import FormSelect from './FormSelect';

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [completed, setCompleted] = useState(false);

  //This is not needed
  // const [disableSubmit, setDisableSubmit] = useState(true);
  // useEffect(() => {
  //   title.length > 0 && date.length > 0
  //     ? setDisableSubmit(false)
  //     : setDisableSubmit(true);
  // }, [title.length, date.length]);

  //Have an onSubmit method to do form validation before onAddTask is called.
  const onSubmit = (e) => {
    e.preventDefault(); //Don't want to submit right away, or go to another page. Prevent the default action
    if (!title || !date) {
      alert('Form requires a title and date');
      return;
    }

    //Data we have captured
    onAddTask({ title, date, completed });

    //After submit button is clicked, clear the form data
    setTitle('');
    setDate('');
    setCompleted(false);
  };

  // const daysOfTheWeek = [
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday',
  //   'Sunday',
  // ];

  const daysOfTheWeek = [
    [0, 'Select Day'],
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday'],
    [7, 'Sunday'],
  ];

  // const handleSetDate = (day) => {
  //   console.log(`Selected ${day}`);
  //   setDate(day);
  // };

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
      {/* <div className="form-ctrl">
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
      </div> */}
      <div className="form-ctrl dropdown">
        <label htmlFor="date">Date:</label>
        {/* <select
          id="date"
          name="task_date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          <option value="" disabled>
            Select Day
          </option>
          {daysOfTheWeek.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select> */}
        <FormSelect
          options={daysOfTheWeek}
          value={date}
          // onSetDate={handleSetDate}
          onSetDate={(day) => setDate(day)}
        />
      </div>
      <input
        className="form-button"
        type="submit"
        value="Submit"
        disabled={title.length === 0 || date.length === 0}
      />
    </form>
  );
}

export default AddTask;
