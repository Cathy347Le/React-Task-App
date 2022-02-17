import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTask from '../Components/AddTask';
import TaskList from '../Components/TaskList';
import { BrowserRouter as Router } from 'react-router-dom';

// test('submit button should disabled at initial render', () => {
//   render(<AddTask />);
//   // screen.debug(); Basically console.log the component's HTML
//   // screen.getByRole('');
//   expect(screen.getByRole('button', { name: /add new task/i })).toBeDisabled();
// });

// test('submit button becomes enabled when title and date is entered', () => {
//   render(<AddTask />);

//   //Recommended approach to target forms is getByLabelText
//   //Type in Title
//   userEvent.type(screen.getByLabelText(/title/i), 'Give Gouda a bath');
//   expect(screen.getByRole('button', { name: /add new task/i })).toBeDisabled();

//   //Select any of the days in Date
//   userEvent.selectOptions(screen.getByRole('combobox'), 'Monday');
//   expect(screen.getByRole('button', { name: /add new task/i })).toBeEnabled();
// });

//BOTH TEST COMBINED

test('submit button should be disabled at initial render and enabled when title and date is selected', () => {
  render(<AddTask />);

  expect(screen.getByRole('button', { name: /add new task/i })).toBeDisabled();

  userEvent.type(screen.getByLabelText(/title/i), 'Give Gouda a bath');
  expect(screen.getByRole('button', { name: /add new task/i })).toBeDisabled();

  userEvent.selectOptions(screen.getByRole('combobox'), 'Monday');
  expect(screen.getByRole('button', { name: /add new task/i })).toBeEnabled();
});

test('check askTask form adds new task when submit button is clicked', () => {
  //Render AskTaskform and TaskList
  render(
    <Router>
      <AddTask />
      <TaskList
        tasks={[
          {
            title: 'Give Gouda a bath',
            date: 'Friday',
            completed: false,
            id: 8,
          },
        ]}
      />
    </Router>
  );
  //Capture askform title and select date and submit Button
  //Add userEvent for title, date, and button click
  //Check Task List for the new Task - search for title and date and reminder icon
  screen.debug();
});
