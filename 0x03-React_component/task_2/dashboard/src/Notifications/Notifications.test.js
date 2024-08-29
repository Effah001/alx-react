import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  test('renders NotificationItem components as list items', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBe(listNotifications.length);
  });

  test('verifies that the first NotificationItem renders the correct HTML', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    // Check the HTML content of the third notification item
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

  describe('With empty listNotifications or no listNotifications', () => {
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
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    test('verifies that the first NotificationItem renders the correct HTML', () => {
      render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      
      const notificationItems = screen.getAllByRole('listitem');
      expect(notificationItems[2].innerHTML).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
  });

  describe('Notifications Component', () => {
    it('should log the correct message when markAsRead is called', () => {
      // Create a spy to monitor console.log
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      // Render the Notifications component with a notification item
      render(
        <Notifications
          displayDrawer={true}
          listNotifications={[{ id: 1, type: 'default', value: 'New course available' }]}
        />
      );

      // Get the notification item and simulate a click
      const notificationItem = screen.getByText('New course available').closest('li');
      if (notificationItem) {
        fireEvent.click(notificationItem);
      }

      // Check if console.log was called with the correct message
      expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

      // Clean up mocks
      consoleSpy.mockRestore();
    });
  });
});
