# React Task Tracker

### Files install

readme.md, .gitignore, bootstrap, sass

### Create a header component

- Create a components folder -> Header.js
- Create a functional component
- Add Button - add new task

### Create a button component

- Add background color and text prop
- Add default props (ignore propTypes for now)

### Create Task List Component

- Create 3 Tasks and render the title
- Add key prop to task items
- Convert taskList to "state" data via useState
  `const [tasks, setTasks] = useState();`
- Since you want other components to access the task state data, it is recommend you <strong>lift the state up</strong>. Have the app.js management the data and have it passed down to other components. Once of the toughest thing for a junior is understanding which component should manage the state.

### Create Task Component

- Create a task component (name, title, date);
- Add X close icon to task item
  `npm i react-icons`
- When you want to delete a task (hitting the X button), that takes happens in the task component, but the state is managed in the app component. What needs to be done is the event (delete) needs to be raised and have app.js handle the event. Method is onDelete and handleDelete.
  - Create handleDelete on app.js - just console.log for now for testing purposes
  - Pass that down to , with the property called onDelete
  - When the X close is hit in the task component `onClick = {onDelete}`, the default info that will console is the event info
    - If you want to pass the task.id, instead of calling onDelete directly, you call a function reference that runs onDelete and passes in the task.id
    - If the console.log works and displayed the id, update the handleDelete method to remove the task selected
    ```
    const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    };
    ```
    - Conditional render: add a message when there are no more tasks
- Add a completed functionality

  - Create handleToggleCompleted and onToggleCompleted and console.log the event and id
  - Also render class dynamically to change task border color - see code in task.js for diff ways of doing this

  ### Add New Task Form

  - Get simple form to display - task title, task date, and submit button
  - useState to manage form data
    - on the form inputs, need to add a value and onChange property. value is whatever user types in and captured into the variable data. onChange, a controlled component will fire when there is data in the value property. onChange will directly call setTitle and setDay to update the state.
    - You can check this is working on React Dev Tools, see state data get updated with user inserts text in the input value
