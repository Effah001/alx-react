import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  render(<Notifications />);
});

test('Notifications renders three list items', () => {
  render(<Notifications />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(3);
});

test('Notifications renders the text "Here is the list of notifications"', () => {
  render(<Notifications />);
  const textElement = screen.getByText('Here is the list of notifications');
  expect(textElement).toBeInTheDocument();
});
