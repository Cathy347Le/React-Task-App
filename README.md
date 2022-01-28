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
- Since you want other components to access the task state data, it is recommend you <strong>lift the state up<strong>. Have the app.js management the data and have it passed down to other components. Once of the toughest thing for a junior is understanding which component should manage the state.

### Create Task Component

- Create a task component (name, title, date);
- Add X close icon to task item
  `npm i react-icons`
- When you want to delete a task (hitting the X button), that takes happens in the task component, but the state is managed in the app component. What needs to be done is the event (delete) needs to be raised and have app.js handle the event. Method is onDelete and handleDelete.
  - Create handleDelete on app.js - just console log for now for testing purposes
  - Pass that down to , with the property called onDelete
  - When the X close is hit in the task component `onClick = {onDelete}`, the default info that will console is the event info
    - If you want to pass the task.id, insted of calling onDelete directly, you call a function that runs onDelete and pass in the task.id
