# React Task Tracker

### Files & Packages to install

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
    - If you wanted to do inline stlying
      ```
      <p className="no-tasks-msg" style={{ textAlign: "center" }}>
      ```
- Add a completed functionality

  - Create handleToggleCompleted and onToggleCompleted and console.log the event and id
  - Also render class dynamically to change task border color - see code in task.js for diff ways of doing this

  ### Add New Task Form

  - Get simple form to display - task title, task date, and submit button
  - useState to manage form data. Set completed property to default to false.
    - on the form inputs, need to add a value and onChange property. value is whatever user types in and captured into the variable data. onChange, a controlled component will fire when there is data in the value property. onChange will directly call setTitle and setDay to update the state.
    - You can check this is working on React Dev Tools, see state data get updated with user inserts text in the input value

- Add New Task when submit button is clicked, done on App.js where state is managed. handleAddTask and onAddTask and onSubmit
  - Include form validation
  - Add task title and date and check that the data console log correctly.
  - Update handleAddTask method to add the new task in the state
    - Need to create a unique key id for the new task
    - Use spread operator to add in the new Task

#### Add Feature - Toggle Add Form

- Add useState on App.js to toggle the form - showAddTaskForm, setshowAddTaskForm
  - In app.js update how Add task from renders.
  ```
  {showAddTaskForm && <AddTask onAddTask={handleAddTask} />}
  ```
  - You can test the logic above by manually updating the intial useState to true or false
  - Create methods to update the toggle functionality onShowAddTaskForm, handleShowAddTaskForm
  - Add conditional rendering to the Add New Task button.
    - Add New Task purple button changes to Hide Task Form orange

#### Add Delete All Task Button

- Reuse button component and create methods handleDeleteAllTask and onDeleteAllTask
- Console.log method to check plumbing
- update handleDeleteAllTask to clear all the tasks `setTasks(tasks.length === 0);`

### ROUTING

#### Version 5

- Install react-router old version , not v6 `npm i react-router-dom@5.2.0`
- Add a NavBar in the header component
- Add `import { BrowserRouter as Router, Route } from "react-router-dom";` in app.js
- Add About and Notes page component
- In app.js wrap everything in <Router></Router> and then add your Route paths
- To bypass page reload, replace anchor links with <Link> component in NavBar.js
- Make Add New Task Button only appear on the homepage (not About or Notes page)
  - useLocation from react-router-dom in header.js
  - useLocation gives you access to useLocation.pathname (renamed to location)

#### Version 6

- Stable version released in early Jan. Updating to version 6 will break your React app
- Install `npm i react-router-dom@6`
- Wrap <Route> with <Routes>. Replace component={About} with element={<About/>} which takes JSX nw

- Common differences are:

  - <Switch> doesn’t exist anymore. Replaced with <Routes> and you have to wrap your routes with <Routes>
  - No more rendering components or passing props to the rendering component in <Route> with component and render anymore. Both are replaced by a single element prop which takes in JSX. So instead of component={Home} will be element={<Home/>}
  - No need for the keyword exact anymore
  - Only <Route> are allowed in <Routes>. No other children tags are allowed
  - Redirect replaced with Navigate and useHistory is now useNavigate

### JSON server

https://www.npmjs.com/package/json-server

- Mockup backend
- `npm i json-server`
- Add script in package.json to server the json server
- `npm run start` runs app and `npm run server` runs the server and creates db.json file, which will be where your app data will be
- Update db.json with your data. Remove the data in app.js and set the useState into an empty array.
- In db.json file, need to change it to JSON objects. Aka keys need to be strings.

  - Removing the data- cause your app to show no task
  - For new task items, backend will automatically create ids for you.
  - Once db.json file is complete, you go to port 5000/tasks to see your data!

- Get task to show on task app, need useEffect

  - useEffect because you want something to happen when the app loads
  - Create a fetchTasks method inside useEffect to use Fetch the server url and console the data (make sure plumbing is correct)
  - Let fetchTasks be its standalone function because you are likely to use it else where
  - update useEffect to getTasks, which makes the API call and set it inside setTasks
    - voila you see your tasks on the app!

- Update delete Task to delete from the server

  - Bc every time you refresh it, it comes back
  - Update handleDelete method to fetch the backend url id and put in a DELETE method request to that url

  - You will see your the is remove db.json and therefore on port 5000/tasks
  - To get your original data back, you will likely need to reload your json data into db.json

- Update Add New Task to the server

  - update handleAddTask method to make a POST request
  - No need to create a unique ID for the new task = server automatically does that
  - fetch the server, make a POST request (add method, headers, and body). Also make the update on the frontend using setTasks which includes the new task

- Update Completed on the server
  - Need to fetch the correct task (create fetchSingleTask), change the completed property and make a PUT request to change the task in the server.

BUG in handleToggleCompleted method
-Server is updating correctly, but not frontend

```
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: data.completed } : task
      )
    );
```

- Once the change to server is made, you just want to pass that data as is into setTasks, so remove the "!"

- Delete all Tasks

  - Captured all the task ids, loop through ids and then ran the delete request multiple times. On the frontend side, change tasks.length to 0.

#### ADD TASK DETAILS COMPONENT

- Create Task Details component
- Get Show Details Link to show on task component `` <Link to={`/task/${task.id}\`}> ``
- Set up route to that single task by ID on app.js `/task:id`
- Once plumbing is setup, update Task Details component
  - Import useState and useEffect
  - When building a component that requires React Router and Backend Server...
  - you need 3 useState - error, isLoaded, and tasks
  - console.log(data) and make sure it renders once when page loads... set the dependency array to an empty array

#### Make Date Editable (dropdown)

- Update Add Task Form - input date field
- Create new label and input fields and style it
- To test the addTask form before submiting, you can use reactDevTools to see if the state changes in AddTask component. No need to console.log it.
- Update select field attributes with the help of reactJS docs
- Approach to making the form select a component
  - https://stackoverflow.com/questions/63948194/how-to-test-select-option-logic-with-react-testing-library
  - https://codesandbox.io/s/eager-violet-kkw0x?file=/src/Select.js

#### Display tasks sorted by Date

- Practice on replit https://replit.com/@Cathy347Le/Array-Iterating-Methods#index.js
- Console.log data and sortedData
- Tasks now sorted by date when loaded. Need to also sort when a new Task is added.
  - Make it reuseable - so you can add the sorted function to fetchTasks and ~~handleAddTasks~~
    - ~~**NOTE**: I don't need to add the sorted fucntion to handleAddTasks, I just need to add `tasks` in the useEffect in the dependency array. It'll sort it everytime tasks gets updated.~~
    - **NOTE** Idea above it wrong, since I noticed the server making infinite get request loops. I updated the handleAddTasks to setTasks(sortedData)

#### Track the number of tasks remaining

- Display a static counter in the header
- Display task counter dynamically and make it conditionally render

#### Update useEffect on App.js

- When you refresh the browser, you can see the text "Hooray!!! You have no more tasks." for a second. Update the conditional return with a isLoaded state.

#### Learn Testing

- Update addTask component - remove alert.
- If there is no title or date selected, disable the button
- Since the status of the button is dependent on the input fields, you need a useEffect

- SIMPLE TEST in Header.js

  - Create-react-app has a test script already built in and will look for filename with test in it
  - add `npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event`
    - This will simulate render a component so you can make queries against it
  - Move test files into a test folder

- TEST AddTask form

  - Submit button is disabled and enabled correctly
  - Check if added task gets added and task remaining increasing to one (this one is hard to test since I have to import functions and hooks)

- END TO END with Cypress `npm install -D cypress @testing-library/cypress`
  - Once installed, the command to run the cypress playground is `npx cypress open`
  - Cypress folder will be created. In command.js add `import "@testing-library/cypress/add-commands"` so we can continue to use the same commands in react-testing-library
  - In Cypress, you have to use FIND not GET
  - Install Testing playground dev tool

### ADD BACKEND - Node, MongoDB, moongoose

- Update folder structure - create frontend and backend folder
- In backend folder, add server.js and install express and nodemon
- Setup server to listen to port 4000
- Create backend/data/tasks.js and get backend to display the data
- Get frontend to fetch the data from backend. Remember to handle the CORS restrictions. Update the fetchURL.
- In CORS, we setup a proxy, if not in port 3000, check port 4000
- Setup concurrently and remove cypress
- Create DB on https://www.mongodb.com/, NPM install mongoose and create DB/connection.js (ignore ENV)

## LIST OF BUGS

1. SOLVED - New task does not appear correctly on the frontend
   Adding in the task via the add Task form does not render correctly on the frontend. Works okay on the server side, which you can tell when you refresh the app. Something is wrong on the frontend side. Const data is suppose to set to await. Remember asynchronous calls!
2. SOLVED - Toggle not undating correctly on the frontend
   Once the change to server is made, you just want to pass that data as is into setTasks, so remove the "!"
3. SOLVED - New task does not appear on frontend after you click on delete all button
   Backend is working just fine. It is because, when the tasks list is emptied, you cannot iterate tasks, so the sortTasksByDay function fails. Aka the tasks array is replaced with Hooray!!! You have no more tasks. This was resolved by console.log data, tasks, and tasks.length in the handleAddTask function. You also see the error in the console. Updated handleAddTask with an if/else statement.
