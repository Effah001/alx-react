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