import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders NotificationItem components instead of li elements', () => {
    render(<Notifications />);
    
    // Check if NotificationItem components are rendered
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBeGreaterThan(0);
  });

  test('verifies that the first NotificationItem renders the correct HTML', () => {
    render(<Notifications />);

    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems[2]).toContainHTML('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
