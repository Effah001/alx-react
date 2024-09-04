import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

test('renders NotificationItem component without crashing', () => {
  render(<NotificationItem type="default" value="test" />);
});

test('renders NotificationItem with correct type and value', () => {
  render(<NotificationItem type="default" value="test" />);
  
  const listItem = screen.getByText('test');
  expect(listItem).toBeInTheDocument();
  expect(listItem).toHaveAttribute('data-notification-type', 'default');
});

test('renders NotificationItem with correct html content', () => {
  render(<NotificationItem html={{ __html: "<u>test</u>" }} />);

  const listItem = screen.getByText('test');
  expect(listItem).toContainHTML('<u>test</u>');
});


describe('NotificationItem Component', () => {
  it('should call markAsRead with the correct ID when clicked', () => {
    const markAsReadSpy = jest.fn(); // Create a spy function
    const { getByText } = render(
      <NotificationItem
        type="default"
        value="Test Notification"
        markAsRead={markAsReadSpy}
        id={1}
      />
    );

    // Simulate a click event on the list item
    fireEvent.click(getByText('Test Notification'));

    // Check if the spy function was called with the correct ID
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});