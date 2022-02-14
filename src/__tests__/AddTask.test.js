import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import AddTask from '../Components/AddTask';

test('submit button should disabled at initial render', () => {
  render(<AddTask />);
  // screen.debug(); Basically console.log the component's HTML
  // screen.getByRole('');
  expect(screen.getByRole('button', { name: /add new task/i })).toBeDisabled();
});
