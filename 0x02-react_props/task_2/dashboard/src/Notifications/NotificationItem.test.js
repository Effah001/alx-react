import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

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
  render(<NotificationItem html="<u>test</u>" />);
  
  const listItem = screen.getByText('test');
  expect(listItem).toContainHTML('<u>test</u>');
});
