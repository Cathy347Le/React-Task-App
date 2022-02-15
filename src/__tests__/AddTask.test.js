import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTask from '../Components/AddTask';

test('submit button should disabled at initial render', () => {
  render(<AddTask />);
  // screen.debug(); Basically console.log the component's HTML
  // screen.getByRole('');
  expect(screen.getByRole('button', { name: /add new task/i })).toBeDisabled();
});

test('submit button becomes enabled when title and date is entered', () => {
  render(<AddTask />);

  //Recommended approach to target forms is getByLabelText
  //Type in Title
  userEvent.type(screen.getByLabelText(/title/i), 'Give Gouda a bath');
  expect(screen.getByRole('button', { name: /add new task/i })).toBeDisabled();

  //Select any of the days in Date
  userEvent.selectOptions(screen.getByRole('combobox'), 'Monday');
  expect(screen.getByRole('button', { name: /add new task/i })).toBeEnabled();
});

//BOTH TEST COMBINED
