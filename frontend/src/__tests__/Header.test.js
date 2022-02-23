import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Components/Header';

test('title of header', () => {
  render(
    <Router>
      <Header name="George" />
    </Router>
  );

  //   const title = screen.getByText(/cathy/i);
  const title = screen.getByText("George's Task Tracker");
  expect(title).toBeInTheDocument();
});
