# React Task Tracker

#### Files

readme.md, notes.md, .gitignore

## BRANCHES

1. Main - most up to date
2. With Node and MongoDB - Backend added + Cypress testing
3. With JSON-Server - used a mock backed + React testing library
4. Routing v6 - React Router version 6
5. Routing v5 - React Router version 4/5
6. Initial-task-app - working simple task app

## LIST OF BUGS

1. SOLVED - New task does not appear correctly on the frontend
   Adding in the task via the add Task form does not render correctly on the frontend. Works okay on the server side, which you can tell when you refresh the app. Something is wrong on the frontend side. Const data is suppose to set to await. Remember asynchronous calls!
2. SOLVED - Toggle not undating correctly on the frontend
   Once the change to server is made, you just want to pass that data as is into setTasks, so remove the "!"
3. SOLVED - New task does not appear on frontend after you click on delete all button
   Backend is working just fine. It is because, when the tasks list is emptied, you cannot iterate tasks, so the sortTasksByDay function fails. Aka the tasks array is replaced with Hooray!!! You have no more tasks. This was resolved by console.log data, tasks, and tasks.length in the handleAddTask function. You also see the error in the console. Updated handleAddTask with an if/else statement.

## IMPROVEMENTS

1. ~~Remove task remaining badge when not on homepage - useLocation from react-router-dom~~
2. Get server to console each request
3. Add second way of seeding data
4. ~~Add env file to remove sensitive data, like MongoDB url and port~~
5. See branch form-options to add Form Select as its own component

## TESTING

#### Cypress

1. DONE - Add a new task
2. DONE - Since you're testing multiple times, add a npm package to make up a diff task title each time

- `npm install @faker-js/faker --save-dev`

#### Unit Testing

1. DONE - AskTask form displays submit button correctly
