import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import PropTypes from 'prop-types';

describe('Notifications component', () => {
  test('renders NotificationItem components instead of li elements', () => {
    render(<Notifications displayDrawer={true} />);
    
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBeGreaterThan(0);
  });

  
  test('verifies that the first NotificationItem renders the correct HTML', () => {
    render(<Notifications displayDrawer={true} />);
  
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems[2].innerHTML).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
  

  test('menu item is displayed when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
    expect(screen.queryByTestId('notifications-div')).not.toBeInTheDocument();
  });
  

  test('div.Notifications is not displayed when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    
    const notificationsDiv = screen.queryByTestId('notifications-div');
    expect(notificationsDiv).not.toBeInTheDocument();
  });


  test('menu item is displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    
    const menuItem = screen.getByText('Your notifications');
    expect(menuItem).toBeInTheDocument();
  });


  test('div.Notifications is displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByTestId('notifications-div')).toBeInTheDocument();
  });

});

describe('With empty listNotifications or no listNotifications', () => {
  test('renders correctly with an empty array', () => {
    render(<Notifications listNotifications={[]} displayDrawer={true} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });

  test('renders correctly without listNotifications property', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });
});

describe('With listNotifications containing elements', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  test('renders correctly with the list of notifications', () => {
    render(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(listNotifications.length);
  });
});